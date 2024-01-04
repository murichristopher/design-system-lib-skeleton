import React, { InputHTMLAttributes, ButtonHTMLAttributes } from 'react';

interface Props$2 extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare function TextField$1(props: Props$2): React.JSX.Element;

interface Props$1 extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare function TextField(props: Props$1): React.JSX.Element;

declare const colors: readonly ["primary", "secondary"];
type Colors = (typeof colors)[number];
declare const sizes: readonly ["sm", "md", "lg"];
type Sizes = (typeof sizes)[number];
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: Colors;
    title?: string;
    size: Sizes;
}
declare const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;

export { Button, TextField$1 as TextField, TextField as TextField2 };
