import { USER_TYPES } from "../types/types"

const initialState = {
  currentUser: null,
}

export const userReducer = (state=initialState, action) => {
  switch(action.type){
    case USER_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state;
  }
}