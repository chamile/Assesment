import {
  SEARCH_DATA,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAIL,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  error: null,
  data: null,
  loading:false,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return {...state, loading: true};
    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case SEARCH_DATA_FAIL:
      return {...state, error: action.error, loading: false};
    default:
      return state;
  }
};

export default searchReducer;
