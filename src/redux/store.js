import { createStore, combineReducers } from 'redux';
import {
  menuItemReducer as menuItems,
  shopReducer as shopData,
  loginInfoReducer as loginInfo,
  currentUserReducer as currentUser,
  cartStateReducer as cartState,
} from './reducers';

const reduxState = combineReducers({
  menuItems,
  shopData,
  loginInfo,
  currentUser,
  cartState,
});

const store = createStore(reduxState);

export default store;
