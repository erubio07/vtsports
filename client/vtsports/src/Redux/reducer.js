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
  GET_USER_BY_ID,
} from "./types";

const initialState = {
  products: [],
  productsFilter: [],
  productsAdmin: [],
  productsFilterAdmin: [],
  productDetail: {},
  randomProducts: [],
  waist: [],
  genres: [],
  types: [],
  user: [],
  filterMessage: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsFilter: action.payload,
      };
    case GET_PRODUCTS_ADMIN:
      return {
        ...state,
        productsAdmin: action.payload,
        productsFilterAdmin: action.payload,
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
    case GET_ALL_WAIST:
      return {
        ...state,
        waist: action.payload,
      };
    case FILTER_BY_GENRE:
      // console.log(action.payload);
      if (action.payload === "All") {
        return {
          ...state,
          products: state.products,
          productsFilter: state.products,
          filterMessage: "",
        };
      } else {
        const data = state.products.filter(
          (p) => p.Genre.name === action.payload
        );
        // console.log(data);
        return {
          ...state,
          products: state.products,
          productsFilter: data,
          filterMessage:
            data.length === 0
              ? "No se encontraron productos con el género seleccionado."
              : "",
        };
      }
    case FILTER_BY_WAIST:
      console.log(action.payload);
      if (action.payload === "-") {
        return {
          ...state,
          products: state.products,
          productsFilter: state.products,
          filterMessage: "",
        };
      } else {
        const data = state.productsFilter.filter((p) =>
          p.Waists.some((w) => w.name === action.payload)
        );
        console.log(data);
        return {
          ...state,
          products: state.products,
          productsFilter: data,
          filterMessage:
            data.length === 0
              ? "No se encontraron productos con el talle seleccionado."
              : "",
        };
      }
    case SORT_BY_PRICE:
      console.log(action.payload);
      const sortedProducts =
        action.payload === "ASC"
          ? state.productsFilter.sort(function (a, b) {
              if (a.price > b.price) {
                return 1;
              }
              if (a.price < b.price) {
                return -1;
              }
              return 0;
            })
          : state.productsFilter.sort(function (a, b) {
              if (a.price > b.price) {
                return -1;
              }
              if (a.price < b.price) {
                return 1;
              }
              return 0;
            });
      console.log(sortedProducts);
      return {
        ...state,
        productsFilter: sortedProducts,
      };
    case GET_ALL_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state;
  }
}

export default rootReducer;
