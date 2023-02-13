import { productsData } from '../../data/products.js';
import { FILTER_PRODUCTS_TYPES } from '../types/types';
import {filterProducts, isFilterActive} from '../utils/filter-products-utils.js';

const initialState = {
  products: productsData,
  filterParameters: {
    name: "",
    category: "",
    price: [0,100000],
    shipping: "",
  },
  filterProducts: productsData,
  active: false,
}

export const filterProductsReducer = (state = initialState, action) => {
  switch(action.type){
    case FILTER_PRODUCTS_TYPES.FILTER_PRODUCTS:
      return {
        ...state,
        filterProducts: filterProducts(state.products,state.filterParameters),
        active: isFilterActive(initialState.filterParameters, state.filterParameters),
      };
    case FILTER_PRODUCTS_TYPES.SET_FILTER_PARAMETERS:
      return {
        ...state,
        filterParameters : {...state.filterParameters,...action.payload},
      }
    case FILTER_PRODUCTS_TYPES.RESET_FILTER_PRODUCTS:
      return {
        ...state,
        filterParameters: {...initialState.filterParameters, name: state.filterParameters.name},
    };
    default:
      return state;
  }
}