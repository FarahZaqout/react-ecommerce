import { loginActionTypes } from '../actions';

const { SET_LOGIN_INFO } = loginActionTypes;

const loginInfoReducer = (state = {}, action) => {
  if (action.type === SET_LOGIN_INFO) {
    return { ...state, ...action.payload };
  }
  return state;
};

export default loginInfoReducer;
