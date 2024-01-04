import React, { InputHTMLAttributes } from "react";
import "./TextField2.css";
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare function TextField(props: Props): React.JSX.Element;
export default TextField;