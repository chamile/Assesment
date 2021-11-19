import {combineReducers} from 'redux';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const appReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
