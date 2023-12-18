import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL } from "./types";
import axios from "axios";

export const getAllProducts = () => {
  return async function (dispatch) {
    let products = await axios.get("http://localhost:3001/products");
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: products.data,
    });
  };
};

export const getProductDetail = (id) => {
  return async function (dispatch) {
    let product = await axios.get(`http://localhost:3001/products/${id}`);
    return dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: product.data,
    });
  };
};
