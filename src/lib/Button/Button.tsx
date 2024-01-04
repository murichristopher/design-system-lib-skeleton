import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

const colors = ["primary", "secondary"] as const;
export type Colors = (typeof colors)[number];

const sizes = ["sm", "md", "lg"] as const;
export type Sizes = (typeof sizes)[number];

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: Colors;
  title?: string;
  size: Sizes;
}

const colorClassNames: { [key in Colors]: string } = {
  primary: "bg-primary",
  secondary: "bg-secondary",
};

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, color, title, size, ...other } = props;

  return (
    <button
      ref={ref}
      className={`btn ${colorClassNames[color]} btn-${size}`}
      {...other}
    >
      {title && <p>{title}</p>}
      {children}
    </button>
  );
});

export default Button;
