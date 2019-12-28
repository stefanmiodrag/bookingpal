import React from "react";

import { useSelector } from "react-redux";
import { selectBookings } from "../../selectors";

import Calendar from "./Calendar";

const CalendarContainer = () => {
    const bookings = useSelector(selectBookings);

    return <Calendar bookings={bookings} />;
};

export default CalendarContainer;