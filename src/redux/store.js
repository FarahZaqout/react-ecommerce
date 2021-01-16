import { createStore, combineReducers } from 'redux';
import {
  menuItemReducer as menuItems,
  shopReducer as shopData,
  loginInfoReducer as loginInfo,
} from './reducers';

const reduxState = combineReducers({
  menuItems,
  shopData,
  loginInfo,
});

const store = createStore(reduxState);

export default store;
