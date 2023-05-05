import axios from "axios";

export const GetJwelleys = (ParamObj, page) => {
  return axios.get(
    `http://localhost:8080/jewellery?_limit=10&_page=${page}`,
    ParamObj
  );
};
