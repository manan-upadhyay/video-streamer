import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

// Import required components
import Header from "../common/Header";
import Footer from "../common/Footer";

const Master = (props) => {
  const [loading, setLoading] = useState(true);
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      loadUser();
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <Header />
          <main>{props?.children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Master;
