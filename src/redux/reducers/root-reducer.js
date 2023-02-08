import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { menuManagerReducer } from "./menu-manager-reducer";

const persistConfig = {
  key : "root",
  storage: storage,
  whiteList : [],
}

export const rootReducer = combineReducers({
  menuManager: menuManagerReducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)