import SIGNER_STAGE from "./signer.stage";
import SIGNER_PROD from "./signer.prod";

const getSignerUrl = () => process.env.REACT_APP_TARGET_ENV === "prod"
  ? SIGNER_PROD
  : process.env.REACT_APP_TARGET_ENV === "stage"
    ? SIGNER_STAGE
    // : "https://localhost:3030/";
     : "https://3nloy5gpz6.execute-api.us-east-1.amazonaws.com/stage/";
    // : "https://api.hopae.app/";

export default getSignerUrl
