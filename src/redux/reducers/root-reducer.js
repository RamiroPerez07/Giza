import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { menuManagerReducer } from "./menu-manager-reducer";
import {cartReducer} from "./cart-reducer.js";

const persistConfig = {
  key : "root",
  storage: storage,
  whiteList : [],
}

export const rootReducer = combineReducers({
  cart: cartReducer,
  menuManager: menuManagerReducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)