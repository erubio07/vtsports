import { GET_ALL_PRODUCTS } from "./types";

const initialState = {
  products: [],
  productsFilter: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsFilter: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
