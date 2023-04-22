import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
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
  const handleLogout = () => {
    console.log("Logged out successfully!");
  };

  return (
    <>
      <div className="header bg-black text-white px-5">
        <div className="main">
          <div className="flex-between gap-5">
            <h1 className="text-3xl">LOGO</h1>
            <h2 className="text-2xl font-medium">My Training Center</h2>
          </div>
          <div className="flex-between gap-5">
            <h5 className="text-xl font-medium">{`${greeting} John`}</h5>
            <p className="text-sm font-semibold" onClick={handleLogout}>Sign out</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
