import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL } from "./types";

const initialState = {
  products: [],
  productsFilter: [],
  productDetail: {},
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
    default:
      return state;
  }
}

export default rootReducer;
