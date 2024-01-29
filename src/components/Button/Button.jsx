import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  color,
  bgColor,
  ...props
}) => {
  const buttonStyles = {
    backgroundColor: bgColor || "#205cdf",
    color: color || "#205cdf",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
  };
  return (
    <button type={type} onClick={onClick} style={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
