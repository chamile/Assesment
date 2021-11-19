import {
  ADD_TO_CART_SUCCESS,
  CLEAR_CART_SUCCESS,
} from '../constants/actionTypes';

export const addToCart = item => dispatch => {
  dispatch(addToCartSuccess(item));
};

export const clearCart = clear => dispatch => {
  dispatch(clearCartSuccess(clear));
};

export const addToCartSuccess = data => ({
  type: ADD_TO_CART_SUCCESS,
  payload: data,
});
export const clearCartSuccess = data => ({
  type: CLEAR_CART_SUCCESS,
  payload: data,
});
