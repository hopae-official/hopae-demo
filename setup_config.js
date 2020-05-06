module.exports.config = {
  region: "us-east-1",
  serviceName: "uportlandia",
  ssmParam:{
    issuers: "/uportlandia/${opt:stage}/issuers"
  },
  s3Bucket: {
    stage: "cleverland-stage",
    prod: "cleverland-prod"
  },
  domain: {
    // stage: "uportlandia.uport.space",
    // prod: "uportlandia.uport.me"
    stage: "demo.hopae.app",
    prod: "demo.hopae.app"
  },
  cors: true
};

module.exports.ISSUER_PROFILES = [{
  id: "CITY_ID",
  name: "제주도청",
  url: {
    stage: "https://demo.hopae.app/city",
    prod: "https://demo.hopae.app/city"
  },
  profileImage: "src/images/jeju/jeju.png"
}, {
  id: "DIPLOMA",
  name: "제주대학교",
  url: {
    stage: "https://demo.hopae.app/university",
    prod: "https://demo.hopae.app/university"
  },
  profileImage: "src/images/jeju/university.png"
}, {
  id: "COMPANY",
  name: "한라전자",
  url: {
    stage: "https://demo.hopae.app/company",
    prod: "https://demo.hopae.app/company"
  },
  profileImage: "src/images/company-logo.png"
}, {
  id: "INSURANCE",
  name: "국민의료보험공단",
  url: {
    stage: "https://demo.hopae.app/insurance",
    prod: "https://demo.hopae.app/insurance"
  },
  profileImage: "src/images/jeju/insurance.png"
}, {
  id: "PHARMACY",
  name: "제주한라병원 인터넷진료부",
  url: {
    stage: "https://demo.hopae.app/pharmacy",
    prod: "https://demo.hopae.app/pharmacy"
  },
  profileImage: "src/images/pharmacy-logo.png"
}, {
  id: "TRANSPORT",
  name: "제주버스운송조합",
  url: {
    stage: "https://demo.hopae.app/transport",
    prod: "https://demo.hopae.app/transport"
  },
  profileImage: "src/images/transport-logo.png"
}, {
  id: "MUSEUM",
  name: "국립제주박물관",
  url: {
    stage: "https://demo.hopae.app/museum",
    prod: "https://demo.hopae.app/museum"
  },
  profileImage: "src/images/museum-logo.png"
}];
