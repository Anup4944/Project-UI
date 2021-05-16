import axios from "axios";

const rootUrl = "http://localhost:5001/api/v1/";
const logApi = rootUrl + "login";

export const getLoginAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(logAPI);
      console.log(data);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
