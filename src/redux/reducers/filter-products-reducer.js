import { productsData } from '../../data/products.js';
import { FILTER_PRODUCTS_TYPES } from '../types/types';
import {filterProducts, isFilterActive, isSortActive} from '../utils/filter-products-utils.js';

const initialState = {
  products: productsData,
  filterParameters: {
    name: "",
    category: "",
    price: [0,100000],
    shipping: "",
    sortByName: "name-undefined",
    sortByPrice: "price-undefined",
  },
  filterProducts: productsData,
  filterActive: false,
  sortActive: false,
}

export const filterProductsReducer = (state = initialState, action) => {
  switch(action.type){

    case FILTER_PRODUCTS_TYPES.FILTER_PRODUCTS:
      return {
        ...state,
        filterProducts: filterProducts(state.products,state.filterParameters),
        filterActive: isFilterActive(initialState.filterParameters, state.filterParameters),
        sortActive: isSortActive(initialState.filterParameters, state.filterParameters),
      };

    case FILTER_PRODUCTS_TYPES.SET_FILTER_PARAMETERS:
      return {
        ...state,
        filterParameters : {...state.filterParameters,...action.payload},
      }

    case FILTER_PRODUCTS_TYPES.RESET_FILTER_PRODUCTS:
      return {
        ...state,
        filterParameters: {
          ...initialState.filterParameters, 
          name: state.filterParameters.name, 
          sortByName: state.filterParameters.sortByName,
          sortByPrice: state.filterParameters.sortByPrice,
        }
      }
    
    case FILTER_PRODUCTS_TYPES.RESET_SORT_PARAMETERS:
      return {
        ...state,
        filterParameters: {
          ...state.filterParameters,
          sortByName: initialState.filterParameters.sortByName,
          sortByPrice: initialState.filterParameters.sortByPrice,
          name: state.filterParameters.name,
        }
      }

    default:
      return state;
  }
}