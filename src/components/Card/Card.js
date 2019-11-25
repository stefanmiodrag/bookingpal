import React from "react";

import * as style from "./Card.style";

const Card = props => (
    <style.Card>
        {props.children}
    </style.Card>
);

export default Card;