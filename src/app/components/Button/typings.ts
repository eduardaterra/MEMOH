import { HTMLAttributes, MutableRefObject } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  ref?: MutableRefObject<HTMLButtonElement | null>;
  size?: "small" | "default" | "large";
  variant?: "primary" | "secondary";
}

