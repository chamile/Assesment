import {
  ADD_TO_CART_SUCCESS,
  CLEAR_CART_SUCCESS,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  items: [],
  orderSuccess: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case CLEAR_CART_SUCCESS:
      return {
        ...state,
        items: [],
        orderSuccess:action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
