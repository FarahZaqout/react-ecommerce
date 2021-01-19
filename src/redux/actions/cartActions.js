import { cartActionTypes } from './types';

const { SET_CART_STATE } = cartActionTypes;

const setCartState = (cartState) => ({
  type: SET_CART_STATE,
  payload: cartState,
});

export default setCartState;
