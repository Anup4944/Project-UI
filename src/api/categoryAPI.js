import axios from "axios";

const rootUrl = "http://localhost:5001/api/v1/";
const catApi = rootUrl + "category";

export const getCategoryAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(catApi);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
