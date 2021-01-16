import { loginActionTypes } from '../actions';

const { SET_LOGIN_INFO, SET_CURRENT_USER } = loginActionTypes;

const loginInfoReducer = (state = {}, action) => {
  if (action.type === SET_LOGIN_INFO) {
    return { ...state, ...action.payload };
  }
  return state;
};

const currentUserReducer = (state = {}, action) => {
  if (action.type === SET_CURRENT_USER) {
    return { ...state, ...action.payload };
  }
  return state;
};

export { loginInfoReducer, currentUserReducer };
