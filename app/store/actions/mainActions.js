import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from '../constants/actionTypes';
import DataService from '../../services/DataService';

export const login = (userName, password) => dispatch => {
  dispatch(fetchData());
  DataService.authenticate(userName, password)
    .then(response => {
      dispatch(fetchDataSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchDataFailed(error));
    });
};

export const fetchData = () => ({
  type: FETCH_DATA,
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailed = error => ({
  type: FETCH_DATA_FAIL,
  error: error,
});
