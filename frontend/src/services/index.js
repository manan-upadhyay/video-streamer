import axios from 'axios';
import { toast } from 'react-toastify';

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
      toast.success(res?.data?.message);
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
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
    toast.error(err?.response?.data?.message);
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
    toast.error(err?.response?.data?.message);
  }
};
