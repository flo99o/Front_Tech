import React from "react";

const Button = ({ value, className, ...rest }) => {
  return <button className={className} {...rest}>{value}</button>;
};

export default Button;
