import React from "react";

import * as style from "./Card.style";

const Card = props => (
    <style.Card space={props.space} width={props.width}>
        {props.children}
    </style.Card>
);

export default Card;