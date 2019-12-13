import React from "react";
import { Icon } from "@blueprintjs/core";

import * as style from "./Notice.style";

const Notice = (props) => (
    <style.Notice>
        <Icon icon="error" iconSize={24} title="error" />
        <style.Content>
            {props.children}
        </style.Content>
    </style.Notice>
);

export default Notice;