import React from "react";

import * as style from "./Label.style";

const Label = props => (
    <style.Wrapper>
        <style.Label>{props.label}</style.Label>
        {props.children}
    </style.Wrapper>
);

export default Label;