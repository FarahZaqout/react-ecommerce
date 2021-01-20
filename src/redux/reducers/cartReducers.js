import { cartActionTypes } from '../actions';

const cartStateReducer = (
  state = { isHidden: true, cartItems: {}, itemCount: 0 },
  action,
) => {
  const { SET_CART_STATE } = cartActionTypes;
  if (action.type === SET_CART_STATE) {
    return { ...state, ...action.payload };
  }
  return state;
};

export default cartStateReducer;
