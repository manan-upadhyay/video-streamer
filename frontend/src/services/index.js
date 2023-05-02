import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");

export const register = async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
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
        title: "Success",
        text: res?.data?.message,
        icon: "success",
      });
    }
    console.log(res);
  } catch (err) {
    Swal.fire({
      title: "Error",
      text: err?.response?.data?.message,
      icon: "error",
    });
  }
};

// export const login = async (data) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const body = JSON.stringify(data);
//     const res = await axios.post(
//       `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
//       body,
//       config
//     );
//     if (res.status === 200) {
//       Swal.fire({
//         title: "Success",
//         text: res?.data?.message,
//         icon: "success",
//       });
//     }
//     return res?.data?.token;
//   } catch (err) {
//     Swal.fire({
//       title: "Error",
//       text: err?.response?.data?.message,
//       icon: "error",
//     });
//   }
// };

export const fetchSections = async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/sections`,
      config
    );
    return res?.data;
  } catch (err) {
    Swal.fire({
      title: "Error",
      text: err?.response?.data?.message,
      icon: "error",
    });
  }
};
