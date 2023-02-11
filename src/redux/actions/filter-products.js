import { FILTER_PRODUCTS_TYPES } from "../types/types";

export const filterProducts = (filterParameters) => {
  return {
    type: FILTER_PRODUCTS_TYPES.FILTER_PRODUCTS,
    payload: filterParameters,
  }
}

export const resetFilterProducts = () => {
  return {
    type: FILTER_PRODUCTS_TYPES.RESET_FILTER_PRODUCTS,
  }
}