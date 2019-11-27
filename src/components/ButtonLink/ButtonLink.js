import React from "react";

import * as style from "./ButtonLink.style";

const ButtonLink = props => (
    <style.ButtonLink to={props.path} theme={props.theme}>
        {props.label}
    </style.ButtonLink>
);

export default ButtonLink;