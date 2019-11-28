import React from "react";

import * as style from "./Button.style";

const Button = props => (
    <style.Button
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClick}
        theme={props.theme}
        minimal={props.minimal}
    >
        {props.label}
    </style.Button>
);

export default Button;