const handler = require("serverless-express/handler");
const express = require("serverless-express/express");
const bodyParser = require("body-parser");
const Credentials = require("uport-credentials").Credentials;
const verifyJWT = require("did-jwt").verifyJWT;

const app = express();
app.use(bodyParser.json());

// const ISSUERS = JSON.parse(process.env.ISSUERS);
ISSUERS = {
  'CITY_ID': {
    did: 'did:ethr:0x68b1ad63978ce465abbfee9a929849db179b7a15',
    key:
      '1c6136ac4d08e1870b011e38b5aecaed5e9fbd7f367edcf34b071ca02ad31818',
    vc: ['/ipfs/QmZrFs6GQL7UU5Vrrn7BYZRGM8GpiPLg11Xxxn8JixtpK8']
  },
  'DIPLOMA': {
    did: 'did:ethr:0xe93d44f93648ee7bce19f9df03435299f352ce09',
    key:
      'f4d27cfcb8a77dddbae5a74879b0747668af960a11def3fd49b2b59cb94d0434',
    vc: ['/ipfs/QmPjQqXALYQ9hAbXhYUAeQ52RrErvVPY2mVoLx6qYZy91q']
  },
  'COMPANY': {
    did: 'did:ethr:0x58c970cda8d64edeef6cf0b06bef47fb5f643565',
    key:
      'c5e85c50bb8dda4a10287613b7ed58c53685da7cfaaa41b1b33339044afa21e5',
    vc: ['/ipfs/QmaeGLNpSMy9pmk7oUMvAezmKDsnXBWDGVspaDEdr5QTbu']
  },
  'INSURANCE': {
    did: 'did:ethr:0x2dca9a34eec580d5db70cfcbc7f5fd56ad028939',
    key:
      '25ae130a07977aeeb8b1c5ba622214d60634469422cdf4601196c3183b54c3d4',
    vc: ['/ipfs/QmTmHqVhQ6X4x8bnnqzJ8hFeergkHPAq2qHC73qY1q7ECy']
  },
  'PHARMACY': {
    did: 'did:ethr:0x9f98c2800d145bfe7dd89730189e03b216a8bb42',
    key:
      '4b061dacd613f2477d10bdf55239eead73343cfde8387a90122dcf0a0a94587e',
    vc: ['/ipfs/QmS4xLricd1MHiH8Eyb97pySFjRnWbPRpGkVqUMCmgFxHU']
  },
  'TRANSPORT': {
    did: 'did:ethr:0xb46e4574e52e4f9192af0f1ec7b09aef6b6c6fcf',
    key:
      '6030fc0eee664b9a1a23fa57893211a55511bcaa037f4e87556b4e91d3404f01',
    vc: ['/ipfs/QmbLe3UkoMK8oB8AbeYH7FWkMmjHjw2QxwUviS7N2ZsFui']
  },
  'MUSEUM': {
    did: 'did:ethr:0x2ca961c79270c585f87a8919371cd200aa78e820',
    key:'f6a7d563af47c80c69b3f8eb2d8b22ef8e00cd43ef077b660d4f52834932c183',
    vc: ['/ipfs/QmVvasZ5okbujc2HwEvM1pfEMYGf3BgZXTqNZpEzgzhrCV']
  }
}

// │ INSURANCE │ 'did:ethr:0x2dca9a34eec580d5db70cfcbc7f5fd56ad028939' │ '25ae130a07977aeeb8b1c5ba622214d60634469422cdf4601196c3183b54c3d4' │ [ '/ipfs/QmTmHqVhQ6X4x8bnnqzJ8hFeergkHPAq2qHC73qY1q7ECy' ] │
// │  COMPANY  │ 'did:ethr:0x58c970cda8d64edeef6cf0b06bef47fb5f643565' │ 'c5e85c50bb8dda4a10287613b7ed58c53685da7cfaaa41b1b33339044afa21e5' │ [ '/ipfs/QmaeGLNpSMy9pmk7oUMvAezmKDsnXBWDGVspaDEdr5QTbu' ] │
// │  DIPLOMA  │ 'did:ethr:0xe93d44f93648ee7bce19f9df03435299f352ce09' │ 'f4d27cfcb8a77dddbae5a74879b0747668af960a11def3fd49b2b59cb94d0434' │ [ '/ipfs/QmPjQqXALYQ9hAbXhYUAeQ52RrErvVPY2mVoLx6qYZy91q' ] │
// │  CITY_ID  │ 'did:ethr:0x68b1ad63978ce465abbfee9a929849db179b7a15' │ '1c6136ac4d08e1870b011e38b5aecaed5e9fbd7f367edcf34b071ca02ad31818' │ [ '/ipfs/QmZrFs6GQL7UU5Vrrn7BYZRGM8GpiPLg11Xxxn8JixtpK8' ] │

const getCredentials = (serviceId) => {
  if (!ISSUERS[serviceId])
    throw new Error("Invalid serviceId");
  return new Credentials({
    did: ISSUERS[serviceId].did,
    privateKey: ISSUERS[serviceId].key
  });
}

app.get("/api/ping", (req, res) => {
  res.send("OK");
});

app.post("/api/request_disclosure", async (req, res) => {
  const {
    serviceId,
    requested = ["name"],
    verified = [],
    notifications = false,
    callbackUrl,
    expiresIn = 600
  } = req.body;
  const credentials = getCredentials(serviceId);
  const jwt = await credentials.createDisclosureRequest({
    requested,
    verified,
    notifications,
    callbackUrl,
    accountType: "none",
    vc: ISSUERS[serviceId].vc
  }, expiresIn);
  res.json({ jwt });
});

app.post("/api/send_verification", async (req, res) => {
  const {
    serviceId,
    sub,
    claim,
    callbackUrl
  } = req.body;
  const credentials = getCredentials(serviceId);
  const jwt = await credentials.createVerification({
    sub,
    vc: ISSUERS[serviceId].vc,
    claim,
    callbackUrl
  });
  res.json({ jwt });
});

app.post("/api/verify_credentials", async (req, res) => {
  const { serviceId, token } = req.body;
  const credentials = getCredentials(serviceId);
  const response = await verifyJWT(token, { audience: credentials.did });
  const profile = await credentials.processDisclosurePayload(response);
  profile.publicEncKey = profile.boxPub;
  res.json({ profile });
});

module.exports.handler = handler(app);
