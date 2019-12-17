import React, { useState } from "react";
import getDay from "date-fns/getDay";

import DayPicker from "./DayPicker";

const DayPickerContainer = () => {
    const today = getDay(new Date());

    const [day, setDay] = useState(today);

    const max = 6;
    const min = 0;

    const increment = () => {
        if (day >= max) { return };
        setDay(day + 1);
    };

    const decrement = () => {
        if (day <= min) { return };
        setDay(day - 1);
    };

    return (
        <DayPicker
            today={today}
            increment={increment}
            decrement={decrement}
            day={day}
        />);
};

export default DayPickerContainer;