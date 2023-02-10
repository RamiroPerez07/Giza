import { CART_TYPES } from "../types/types";
import {productsData} from '../../data/products.js';


const initial_state = {
  products : [...productsData],
  productsCart : [],
}

export const cartReducer = (state=initial_state,action) => {
  switch(action.type){
    case CART_TYPES.ADD_PRODUCT_TO_CART:
      return {
        ...state,
      }
    default:
      return state;
  }
}