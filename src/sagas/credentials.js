import { spawn, takeEvery, put, call, take } from "redux-saga/effects";
import { transport } from "uport-transports";
import { captureException } from "@sentry/browser";
import { createSocketChannel } from '../utils/createSocketChannel';

import {
  CRED_VERIFY,
  REQ_DISCLOSURE,
  SEND_VERIF
} from "../constants/actions";
import {
  reqDisclosureSuccess,
  saveProfile,
  setLoading,
  verifyCredentialsSuccess,
  sendVerificationSuccess,
} from "../actions";
import createChasquiUrl from "../utils/createChasquiUrl";
import createCallbackUrl from "../utils/createCallbackUrl";
import request from "../utils/request";
import createJwtUrl from "../utils/createJwtUrl";
import { SIGNER_URL } from "../constants/config";
import socketIOClient from 'socket.io-client';

function* verifyCredentials(action) {
  const { serviceId, token } = action;
  yield put(setLoading(CRED_VERIFY, true));
  try {
    const response = yield call(request, `${SIGNER_URL}api/verify_credentials`, {
      method: "post",
      dataType: "json",
      data: {
        serviceId,
        token
      }
    });
    const { profile } = response.json;
    profile.publicEncKey = profile.boxPub;
    yield put(verifyCredentialsSuccess(profile));
    yield put(saveProfile(profile));
  } catch (ex) {
    console.error(ex);
    captureException(ex);
  }
  yield put(setLoading(CRED_VERIFY, false));
}

const connect = () => {
  const socket = socketIOClient(`${SIGNER_URL}`);
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket)
    })
  })
}

function* onMessage(socket, type) {
  {
    const channel = yield call(createSocketChannel, socket, type);
    while (true) {
      try {
        const message = yield take(channel);
        console.log(message);
      } catch (e) {
        alert(e.message);
      }
    }
  }
}

function* requestDisclosure(action) {
  const { serviceId, callbackId, requestedClaims, isMobile } = action;
  const callbackUrl = isMobile
    ? createCallbackUrl(callbackId)
    : createChasquiUrl(callbackId);

  const expiresIn = 2 * 60; // seconds
  const socket = yield call(connect);
  console.log(socket);
  console.log(socket.id);
  let channel;
  try {
    const response = yield call(request, `${SIGNER_URL}api/request_disclosure`, {
      method: "post",
      dataType: "json",
      data: {
        serviceId,
        requested: ["name"],
        verified: requestedClaims,
        notifications: !isMobile,
        callbackUrl: `${SIGNER_URL}?id=${socket.id}`,
        expiresIn
      }
    });
    const { jwt } = response.json;
    const jwtUrl = yield call(createJwtUrl, jwt, callbackUrl, isMobile);

    yield put(setLoading(REQ_DISCLOSURE, true));
    yield put(reqDisclosureSuccess(callbackId, jwtUrl, socket));
  } catch (ex) {
    console.log(ex);
    captureException(ex);
  }

  yield put(setLoading(REQ_DISCLOSURE, false));
  channel = yield call(createSocketChannel, socket, 'dm');
  const message = yield take(channel);
  console.log(message)
}

function* sendVerification(action) {
  const callbackId = action.callbackId;
  const serviceId = action.serviceId;
  const profile = action.profile;
  const claim = action.claim;
  const isMobile = action.isMobile;
  const pushToken = profile.pushToken;
  const publicEncKey = profile.publicEncKey;
  const callbackUrl = isMobile
    ? createCallbackUrl(callbackId)
    : createChasquiUrl(callbackId);
  yield put(setLoading(SEND_VERIF, true));
  try {
    const response = yield call(request, `${SIGNER_URL}api/send_verification`, {
      method: "post",
      dataType: "json",
      data: {
        serviceId,
        sub: profile.did,
        claim,
        callbackUrl
      }
    });
    const { jwt } = response.json;
    const jwtUrl = yield call(createJwtUrl, jwt, callbackUrl, isMobile);
    if (isMobile) {
      yield put(sendVerificationSuccess(callbackId, jwtUrl));
    } else {
      if (pushToken && publicEncKey) {
        transport.push.send(pushToken, publicEncKey)(jwt);
        yield put(sendVerificationSuccess(callbackId, jwtUrl, true));
      } else {
        yield put(sendVerificationSuccess(callbackId, jwtUrl));
      }
    }
  } catch (ex) {
    console.log(ex);
    captureException(ex);
  }
  yield put(setLoading(SEND_VERIF, false));
}

export default function* () {
  yield spawn(takeEvery, CRED_VERIFY, verifyCredentials);
  yield spawn(takeEvery, REQ_DISCLOSURE, requestDisclosure);
  yield spawn(takeEvery, SEND_VERIF, sendVerification);
}
