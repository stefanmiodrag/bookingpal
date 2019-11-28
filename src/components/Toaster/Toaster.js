import React from "react";
import { Icon } from "@blueprintjs/core";

import * as style from "./Toaster.style";

const Toaster = props => (
    <style.Container>
        <style.Toaster role="alert" theme={props.theme} visible={props.visible}>
            <span>{props.label}</span>

            <style.Button onClick={props.close}>
                <Icon icon="cross" iconSize={20} title="close" />
            </style.Button>
        </style.Toaster>
    </style.Container>
);

export default Toaster;