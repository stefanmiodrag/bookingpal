import React from "react";

import * as style from "./Notice.style";

const Notice = (props) => (
    <style.Notice>
        <style.Content>
            {props.children}
        </style.Content>
    </style.Notice>
);

export default Notice;