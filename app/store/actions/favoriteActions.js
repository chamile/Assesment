import {SET_FAVORITES_SUCCESS} from '../constants/actionTypes';

export const setFavItems = itemList => dispatch => {
  dispatch(setFavSuccess(itemList));
};

export const setFavSuccess = data => ({
  type: SET_FAVORITES_SUCCESS,
  payload: data,
});
