import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS_RANDOM,
  FILTER_BY_GENRE,
  GET_ALL_WAIST,
  FILTER_BY_WAIST,
  SORT_BY_PRICE,
  GET_PRODUCTS_ADMIN,
  GET_ALL_GENRES,
  GET_ALL_TYPES,
  CREATE_PRODUCT,
  GET_USER_BY_ID
} from "./types";
import axios from "axios";

export const getAllProducts = () => {
  return async function (dispatch) {
    let products = await axios.get("https://vtsports.onrender.com/products");
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: products.data,
    });
  };
};

export const getProductsAdmin = () => {
  return async function (dispatch) {
    let products = await axios.get("https://vtsports.onrender.com/products/admin");
    return dispatch({
      type: GET_PRODUCTS_ADMIN,
      payload: products.data,
    });
  };
};

export const getProductDetail = (id) => {
  return async function (dispatch) {
    let product = await axios.get(`https://vtsports.onrender.com/products/${id}`);
    return dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: product.data,
    });
  };
};

export const getRandomProducts = () => {
  return async function (dispatch) {
    let products = await axios.get("https://vtsports.onrender.com/products/rand");
    return dispatch({
      type: GET_PRODUCTS_RANDOM,
      payload: products.data,
    });
  };
};

export const filterByGenre = (genre) => {
  console.log(genre);
  return {
    type: FILTER_BY_GENRE,
    payload: genre,
  };
};

export const getAllWaist = () => {
  return async function (dispatch) {
    let waist = await axios.get("https://vtsports.onrender.com/waist");
    // console.log(waist);
    return dispatch({
      type: GET_ALL_WAIST,
      payload: waist.data,
    });
  };
};

export const filterByWaist = (waist) => {
  console.log(waist);
  return {
    type: FILTER_BY_WAIST,
    payload: waist,
  };
};

export const sortByPrice = (value) => {
  console.log(value);
  return {
    type: SORT_BY_PRICE,
    payload: value,
  };
};

export const getAllGenres = () => {
  return async function (dispatch) {
    let genres = await axios.get("https://vtsports.onrender.com/genres");
    return dispatch({
      type: GET_ALL_GENRES,
      payload: genres.data,
    });
  };
};

export const getAllTypes = () => {
  return async function (dispatch) {
    let types = await axios.get("https://vtsports.onrender.com/types");
    // console.log(types);
    return dispatch({
      type: GET_ALL_TYPES,
      payload: types.data,
    });
  };
};

export const createProduct = (info) => {
  console.log(info);
  return async function (dispatch) {
    let activity = await axios.post("https://vtsports.onrender.com/products", info);
    return activity;
  };
};

export const getUserById = (id) => {
  console.log(id);
  return async function (dispatch) {
    let user = await axios.post("https://vtsports.onrender.com/user/id", {id});
    console.log(user);
    return dispatch({
      type: GET_USER_BY_ID,
      payload: user.data,
    });
  };
};
