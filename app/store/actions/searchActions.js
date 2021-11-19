import {
  SEARCH_DATA,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAIL,
} from '../constants/actionTypes';
import SearchService from '../../services/SearchService';

export const search = searchText => dispatch => {
  dispatch(searchData());
  SearchService.search(searchText)
    .then(response => {
      dispatch(searchDataSuccess(response.data));
    })
    .catch(error => {
      dispatch(searchDataFailed(error));
    });
};

export const searchData = () => ({
  type: SEARCH_DATA,
});

export const searchDataSuccess = data => ({
  type: SEARCH_DATA_SUCCESS,
  payload: data,
});

export const searchDataFailed = error => ({
  type: SEARCH_DATA_FAIL,
  error: error,
});
