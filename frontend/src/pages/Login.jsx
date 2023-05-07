import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { isAuth, login } = authContext;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  //check if the user is already loggedin
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  const validateSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {
      email: !formData.email ? "Email is required" : null,
      password: !formData.password ? "Password is required" : null,
    };
    setErrors(tempErrors);

    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    submitHandler(e);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <>
      <div className="login-signup-wrapper">
        <div className="card max-w-[380px] w-full">
          <div className="text-center">
            <h2 className="card-page-title">Welcome to Video Streamer</h2>
            <p className="card-page-info">
              Log into your account by entering your email and password.
            </p>
          </div>
          <form
            id="websiteUserLoginForm"
            onSubmit={validateSubmit}
            className="grid grid-cols-1 group"
          >
            <div className="input-fields-wrapper">
              <label>Email</label>
              <input
                className={
                  errors.email ? "input-style input-err-style" : "input-style"
                }
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  setErrors({ ...errors, email: null });
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
              <span className="err-tag">{errors.email ?? ""}</span>
            </div>
            <div className="input-fields-wrapper">
              <label>Password</label>
              <input
                className={
                  errors.password
                    ? "input-style input-err-style"
                    : "input-style"
                }
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={(e) => {
                  setErrors({ ...errors, password: null });
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
              <span className="err-tag">{errors.password ?? ""}</span>
            </div>
            <div className="mt-uni-gap">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
            <Link to="forgot-password" className="btn-link mt-uni-gap">
              Forgot Password ?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
