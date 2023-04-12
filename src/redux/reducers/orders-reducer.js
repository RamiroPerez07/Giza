import { ORDERS_TYPES } from "../types/types";

const initial_state = {
  orders: null,
  loading: false,
  error: null,
}

export const ordersReducer = (state = initial_state, action) => {
  switch(action.type){
    case ORDERS_TYPES.CREATE_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case ORDERS_TYPES.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload]
      }
    case ORDERS_TYPES.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ORDERS_TYPES.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      }
    case ORDERS_TYPES.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }
    default:
      return state;
  }
}

