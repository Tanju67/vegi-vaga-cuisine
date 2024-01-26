import React from "react";
import classes from "./Input.module.css";

function Input({ name, type, title, element = "input" }) {
  return (
    <div className={classes.formControl}>
      <label htmlFor={name}>{title}</label>
      {element === "input" && <input type={type} id={name} name={name} />}
      {element === "textarea" && <textarea type={type} id={name} name={name} />}
    </div>
  );
}

export default Input;
