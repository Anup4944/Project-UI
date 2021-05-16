import axios from "axios";

const rootUrl = "http://localhost:5001/api/v1/";
const prodApi = rootUrl + "product";

export const getProductsAPI = () => {
  console.log("from api");
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(prodApi);
      console.log(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
