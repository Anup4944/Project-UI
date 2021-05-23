import axios from "axios";

const rootUrl = "http://localhost:5001/api/v1/";
const logApi = rootUrl + "login";

export const getLoginAPI = frmDt => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(logApi, frmDt);
      console.log(data);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
