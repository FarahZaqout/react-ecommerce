import { loginActionTypes } from './types';

const { SET_LOGIN_INFO, SET_CURRENT_USER } = loginActionTypes;

const setLogin = (loginInfo) => ({
  type: SET_LOGIN_INFO,
  payload: loginInfo,
});

const setCurrentUser = (currentUser) => ({
  type: SET_CURRENT_USER,
  payload: currentUser,
});

export { setLogin, setCurrentUser };
