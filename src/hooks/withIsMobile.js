import React, { useState, useEffect } from "react";
const defaultWidth = 1080;

export const useIsMobile = () => {
  const [width, setWidth] = useState(defaultWidth);

  useEffect(() => {
    setWidth(window && window.innerWidth ? window.innerWidth : defaultWidth);
    const handleResize = () => {
      return window && window.innerWidth
        ? setWidth(window.innerWidth)
        : () => {};
    };
    window &&
      window.addEventListener &&
      window.addEventListener("resize", handleResize);
    return () => {
      window &&
        window.removeEventListener &&
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isMobile: width <= 768,
  };
};

// eslint-disable-next-line react/display-name
export const withIsMobile = (Cmp) => (props) => {
  const { width, isMobile } = useIsMobile();
  return (
    <Cmp {...props} width={width} isMobile={isMobile}>
      {props.children}
    </Cmp>
  );
};
