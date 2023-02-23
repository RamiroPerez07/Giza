import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { menuManagerReducer } from "./menu-manager-reducer";
import {cartReducer} from "./cart-reducer.js";
import { filterProductsReducer } from "./filter-products-reducer";
import { userReducer } from "./user-reducer";

const persistConfig = {
  key : "root",
  storage: storage,
  whiteList : ["cart","filterPRoducts", "user"],
}

export const rootReducer = combineReducers({
  cart: cartReducer,
  menuManager: menuManagerReducer,
  filterProducts: filterProductsReducer,
  user: userReducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)