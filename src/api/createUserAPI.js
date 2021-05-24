import axios from "axios";

const rootUrl = "http://localhost:5001/api/v1/";
const creatUserAPI = rootUrl + "user";

export const createNewUserApi = (frmDt) => {
  return new Promise(async(resolve, reject) => {
    try {
      const { data } = await axios.post(creatUserAPI, frmDt);
      console.log(data)
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
