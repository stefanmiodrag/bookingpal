import React from "react";
import { Icon } from "@blueprintjs/core";

import * as style from "./Button.style";

const Button = props => (
    <style.Button
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClick}
        theme={props.theme}
        minimal={props.minimal}
    >
        <style.Label>
            {props.label}
            {props.icon && <Icon icon={props.icon} />}
        </style.Label>
    </style.Button>
);

export default Button;