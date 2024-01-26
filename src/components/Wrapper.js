import React from "react";
import classes from "./Wrapper.module.css";

function Wrapper({ className, children }) {
  return <div className={`${classes.wrapper} ${className}`}>{children}</div>;
}

export default Wrapper;
