import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { logout, isAuth } = authContext;
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    const cstOffset = -6; // CST offset from UTC
    const cstHour = hour + cstOffset;

    if (cstHour >= 5 && cstHour < 12) {
      setGreeting("Good Morning");
    } else if (cstHour >= 12 && cstHour < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  // handle logout actions
  const handleClick = () => {
    isAuth ? logout() : navigate("/login");
  };

  return (
    <>
      <div className="px-5 text-white bg-black header">
        <div className="main">
          <div className="gap-5 flex-between">
            <Link to="/">
              <h1 className="text-3xl">LOGO</h1>
            </Link>
            <h2 className="text-2xl font-medium">My Training Center</h2>
          </div>
          <div className="gap-5 flex-between">
            <h5 className="text-xl font-medium">{`${greeting} John`}</h5>
            <p
              className="text-sm font-semibold cursor-pointer"
              onClick={handleClick}
            >
              {isAuth ? "Sign out" : "login"}
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
