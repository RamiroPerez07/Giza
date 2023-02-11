import { productsData } from '../../data/products.js';
import { FILTER_PRODUCTS_TYPES } from '../types/types';
import {filterProducts} from '../utils/filter-products-utils.js';

const initialState = {
  products: productsData,
  filterParameters: {
    category: null,
    price: null,
    shipping: null,
  },
  filterProducts: productsData,
}

export const filterProductsReducer = (state = initialState, action) => {
  switch(action.type){
    case FILTER_PRODUCTS_TYPES.FILTER_PRODUCTS:
      return {
        ...state,
        filterParameters: {
          category: action.payload.category,
          price: action.payload.price,
          shipping: action.payload.shipping,
        },
        filterProducts: filterProducts(state.products,action.payload),
      };
    case FILTER_PRODUCTS_TYPES.RESET_FILTER_PRODUCTS:
      return initialState;
    default:
      return state;
  }
}