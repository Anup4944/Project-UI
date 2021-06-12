import axios from "axios";

const rootUrl = "http://localhost:5001/api/v1/";
const createUserInfoAPI = rootUrl + "shipping";

export const createNewUserInfoApi = (frmDt) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(createUserInfoAPI, frmDt);
      resolve(data);
      console.log("from api", data);
    } catch (error) {
      reject(error);
    }
  });
};
