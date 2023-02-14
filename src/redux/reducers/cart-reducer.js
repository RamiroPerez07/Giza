import { CART_TYPES } from "../types/types";
import {productsData} from '../../data/products.js';
import {addProductToCart, decreaseProductFromCart} from '../utils/cart-utils.js';


const initial_state = {
  products : [...productsData],
  productsCart : [],
}

export const cartReducer = (state=initial_state,action) => {
  switch(action.type){
    case CART_TYPES.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        productsCart: addProductToCart(action.payload, state.productsCart) ,
      }
    case CART_TYPES.DECREASE_PRODUCT_FROM_CART:
      return {
        ...state,
        productsCart: decreaseProductFromCart(action.payload, state.productsCart)
      }
    default:
      return state;
  }
}