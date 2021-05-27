import axios from "axios";

const rootUrl = "http://localhost:5001/api/v1/";
const prodApi = rootUrl + "product";
const prodCatApi = rootUrl + "product/product/";
const singleProdApi = rootUrl + "product/product/";

export const getProductsAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(prodApi);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getProductsByCatAPI = (catId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(prodCatApi + catId);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleProductAPI = (prodId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(singleProdApi + prodId);
console.log(data)
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
