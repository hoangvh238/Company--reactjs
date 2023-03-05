import React from "react";
import classes from "./Button.module.scss";

const Button = ({ to, children, className, onClick }) => {
  const buttonClasses = [classes.button];
  if (className) {
    buttonClasses.push(className);
  }

  return (
    <a href={to} className={buttonClasses.join(" ")} onClick={onClick}>
      {children}
    </a>
  );
};

export default Button;
