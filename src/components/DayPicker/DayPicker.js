import React from "react";
import { Icon } from "@blueprintjs/core";

import { dayOfTheWeek } from "../../helpers";

import * as style from "./DayPicker.style";

const DayPicker = ({ today, increment, decrement, day }) => {

    return (
        <>
            <style.Container>
                <style.Button onClick={decrement}>
                    <Icon icon="chevron-left" />
                </style.Button>

                <style.Button data-value={today}>{dayOfTheWeek(day)}</style.Button>

                <style.Button onClick={increment}>
                    <Icon icon="chevron-right" />
                </style.Button>
            </style.Container>
        </>
    );
};

export default DayPicker;
