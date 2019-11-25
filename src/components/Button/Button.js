import React from "react";

import * as style from "./Button.style";

const Button = props => (
    <style.Button theme={props.theme}>
        {props.label}
    </style.Button>
);

export default Button;