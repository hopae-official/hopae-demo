import request from "./request";
import { CHASQUI_URL } from "../constants/config";
import createChasquiUrl from "../utils/createChasquiUrl";

async function jwtToUrl(jwt) {
  const response = await request(`${CHASQUI_URL}topic/`, {
    method: "post",
    dataType: "json",
    data: jwt
  });
  // 노노야...
  // console.log("이게 과연 callbackId?? ");
  // console.log(response.json.topicId);
  return createChasquiUrl(response.json.topicId);
}

export default jwtToUrl;
