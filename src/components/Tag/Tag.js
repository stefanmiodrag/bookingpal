import React from "react";

import * as style from "./Tag.style";

const Tag = props => (
    <style.Tag>
        {props.label}
    </style.Tag>
);

export default Tag;