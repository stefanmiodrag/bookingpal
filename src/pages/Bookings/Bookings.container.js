import React from "react";

import { useSelector } from "react-redux";
import { selectBookings } from "../../selectors";

import Bookings from "./Bookings";

const BookingsContainer = props => {
    const bookings = useSelector(selectBookings);

    return <Bookings bookings={bookings} />
};

export default BookingsContainer;