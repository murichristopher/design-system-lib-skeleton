import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";
declare const colors: readonly ["primary", "secondary"];
export type Colors = (typeof colors)[number];
declare const sizes: readonly ["sm", "md", "lg"];
export type Sizes = (typeof sizes)[number];
export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: Colors;
    title?: string;
    size: Sizes;
}
declare const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export default Button;
