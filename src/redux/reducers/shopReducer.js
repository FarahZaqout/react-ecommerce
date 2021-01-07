import { shopData } from '../../dataMocks';

const shopReducer = (state = shopData, action) => {
  if (action.type === 'CHANGE_SHOP_DATA') {
    return action.payload;
  }
  return state;
};

export default shopReducer;
