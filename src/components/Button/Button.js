import React from "react";

import * as style from "./Button.style";

const Button = props => (
    <style.Button disabled={props.disabled} theme={props.theme} minimal={props.minimal}>
        {props.label}
    </style.Button>
);

export default Button;