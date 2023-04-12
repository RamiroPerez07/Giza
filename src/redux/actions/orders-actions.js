import { ORDERS_TYPES } from "../types/types";
import { store } from "../store";
import { createOrderDocument } from "../../firebase/firebase-utils";
import { onSnapshot } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { getOrders } from "../../firebase/firebase-utils";

export const createOrderFail = error => ({
  type: ORDERS_TYPES.CREATE_ORDER_FAIL,
  payload: error,
});

export const createOrder = orderData => async dispatch => {
  const {user: {currentUser}} = store.getState();

  try {
    const orderRef = await createOrderDocument({
      ...orderData,
      orderId: uuidv4(),
      userId: currentUser.id,
    });

    onSnapshot(orderRef, _snapShot =>{
      dispatch(getFullOrders(currentUser.id));
    })
  } catch (error) {
    dispatch(createOrderFail(error));
  }
}

// Para manejar el loading

export const getOrdersStart = () => ({
  type: ORDERS_TYPES.FETCH_ORDERS_START,
})

//Para recibir las ordenes
export const getOrdersSuccess = (orders) => ({
  type: ORDERS_TYPES.FETCH_ORDERS_SUCCESS,
  payload: orders,
})

// Si hay un error
export const getOrdersFail = error => ({
  type: ORDERS_TYPES.FETCH_ORDERS_FAIL,
  payload: error || "Upps, algo salio mal. No hay ordenes sin usuario."
})

// Para recibir todas las ordenes

export const getFullOrders = userId => async dispatch => {
  const {
    orders: { orders: currentOrdersInRedux} , 
  } = store.getState();

  dispatch(getOrdersStart());

  try {
    const orders = await getOrders(
      userId,
      currentOrdersInRedux,
      dispatch,
      getFullOrders
    )
    dispatch(getOrdersSuccess(orders));
  } catch (error) {
    dispatch(getOrdersFail(error.message));
  }

}

export const clearError = () => ({
  type: ORDERS_TYPES.CLEAR_ERROR,
})