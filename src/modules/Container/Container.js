import React from "react";

import * as style from "./Container.style";

const Container = (props) => (
    <style.Container>
        {props.children}
    </style.Container>
);

export default Container;