import { createSelector } from "reselect";

import * as  ACTIONS from "../constants/actions";

export const isLoading = state => Boolean(state.loading.length);
export const getUPortMessages = state => state.uportMessages;
export const getUPortLogin = state => state.uportLogin;
export const getUPortProfile = createSelector(getUPortLogin, login => login.profile);
export const getUPortVerification = state => state.uportVerification;
export const isLoggedIn = createSelector(getUPortProfile, p => Boolean(p && p.did));
export const getCityIdInfo = state => state.cityIdInfo;
export const getCityIdClaim = createSelector(getUPortProfile, p => p && p["Cleverland City ID"]);
