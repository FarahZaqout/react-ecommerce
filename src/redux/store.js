import { createStore, combineReducers } from 'redux';
import {
  menuItemReducer as menuItems,
  shopReducer as shopData,
} from './reducers';

const reduxState = combineReducers({
  menuItems,
  shopData,
});

const store = createStore(reduxState);

export default store;
