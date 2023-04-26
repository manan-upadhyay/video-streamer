import React, { lazy } from "react";

// Import required components
const Header = lazy(import("@/common/Header"));
const Footer = lazy(import("@/common/Footer"));

const Master = (props) => {
  return (
    <>
      <Header />
      <main className="main">{props?.children}</main>
      <Footer />
    </>
  );
};

export default Master;
