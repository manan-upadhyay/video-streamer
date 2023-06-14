import React, { useReducer } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import { LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types';

const AuthState = (props) => {
  const initialState = {
    isAuth: false,
    loading: true,
    user: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (token) {
      dispatch({
        type: LOAD_USER,
        payload: user,
      });
    }
  };

  //login user
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        formData,
        config
      );

      if (res.status === 200) {
        Swal.fire({
          title: 'Success',
          text: res?.data?.message,
          icon: 'success',
        });
      }

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      Swal.fire({
        title: 'Error',
        text: err?.response?.data?.message,
        icon: 'error',
      });
      dispatch({
        type: LOGIN_FAIL,
        payload: err?.response?.data?.message,
      });
    }
  };

  //logout
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: state.isAuth,
        loading: state.loading,
        user: state.user,
        login,
        logout,
        loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
