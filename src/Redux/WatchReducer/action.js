import axios from "axios";

export const GetWacthes = (ParamObj, page) => {
  return axios.get(
    `http://localhost:8080/watches?_limit=10&_page=${page}`,
    ParamObj
  );
};
