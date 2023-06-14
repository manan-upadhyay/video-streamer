import { LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload.user,
      };

    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {
        ...state,
        isAuth: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
