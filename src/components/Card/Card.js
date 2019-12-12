import React from "react";

import * as style from "./Card.style";

const Card = props => (
    <style.Card bar={props.bar} space={props.space} width={props.width} elevated={props.elevated}>
        {props.children}
    </style.Card>
);

export default Card;