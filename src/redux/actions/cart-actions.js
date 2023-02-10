import { CART_TYPES } from "../types/types";

export const addProductToCart = (product) => {
  return {
    type: CART_TYPES.ADD_PRODUCT_TO_CART, 
    payload: product,
  };
};