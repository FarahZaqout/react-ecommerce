import { shopData } from '../../dataMocks';
import { shopActionTypes } from '../actions';

const { SET_SHOP_DATA } = shopActionTypes;

const shopReducer = (state = shopData, action) => {
  if (action.type === SET_SHOP_DATA) {
    return action.payload;
  }
  return state;
};

export default shopReducer;
