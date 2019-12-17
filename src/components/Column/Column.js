import React from "react";

import * as style from "./Column.style";

const Column = (props) => (
    <style.Column mb={props.mb} width={props.width.toLowerCase()}>
        {props.children}
    </style.Column>
);

export default Column;