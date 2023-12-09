import { GET_ALL_PRODUCTS } from "./types";
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
