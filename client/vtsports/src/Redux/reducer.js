import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS_RANDOM,
} from "./types";

const initialState = {
  products: [],
  productsFilter: [],
  productDetail: {},
  randomProducts: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsFilter: action.payload,
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case GET_PRODUCTS_RANDOM:
      return {
        ...state,
        randomProducts: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
