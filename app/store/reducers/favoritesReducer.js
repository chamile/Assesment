import {SET_FAVORITES_SUCCESS} from '../constants/actionTypes';

const INITIAL_STATE = {
  favList: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FAVORITES_SUCCESS:
      return {
        ...state,
        favList: action.payload,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
