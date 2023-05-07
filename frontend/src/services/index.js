import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');

const removeToken = () => {
  localStorage.removeItem('token');
};

export const register = async (data) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify(data);
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
      body,
      config
    );
    if (res.status === 200) {
      Swal.fire({
        title: 'Success',
        text: res?.data?.message,
        icon: 'success',
      });
    }
    console.log(res);
  } catch (err) {
    Swal.fire({
      title: 'Error',
      text: err?.response?.data?.message,
      icon: 'error',
    });
  }
};

export const fetchSections = async (data) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/sections`,
      config
    );
    return res?.data;
  } catch (err) {
    if (err.response.status === 401) {
      removeToken();
    }
    Swal.fire({
      title: 'Error',
      text: err?.response?.data?.message,
      icon: 'error',
    }).then((result) => {
      window.location.reload();
    });
  }
};

export const fetchVideos = async (data) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/videos`,
      config
    );
    return res?.data;
  } catch (err) {
    if (err.response.status === 401) {
      removeToken();
    }
    Swal.fire({
      title: 'Error',
      text: err?.response?.data?.message,
      icon: 'error',
    }).then((result) => {
      window.location.reload();
    });
  }
};
