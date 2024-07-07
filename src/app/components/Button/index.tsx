import React from "react";
import { ButtonProps } from "./typings";
import "./styles.scss";

export default function Button({
  size = "default",
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button button-size--${size} button-variant--${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}

