import React from "react";
import { Icon } from "@blueprintjs/core";

import { dayOfTheWeek } from "../../helpers";

import * as style from "./DayPicker.style";

const DayPicker = (props) => (
    <style.Container>
        <style.Button onClick={props.decrement}>
            <Icon icon="chevron-left" />
        </style.Button>

        <style.Button>{dayOfTheWeek(props.today)}</style.Button>

        <style.Button onClick={props.increment}>
            <Icon icon="chevron-right" />
        </style.Button>
    </style.Container>
);

export default DayPicker;
