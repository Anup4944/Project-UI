import axios from "axios";

const rootUrl = "http://localhost:5001/api/v1/";
const crtUserAPI = rootUrl + "product";

export const crtUserAPI = () => {
  return new Promise((resolve, reject) => {
    try {
      const { data } = await axios.get(crtUserAPI);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
