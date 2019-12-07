import React, { useState } from "react";

import { callFindBooking } from "../../api/booking";

import Start from "./Start";

const StartContainer = props => {
    const [bookings, setBookings] = useState("");

    const getBookings = () => {
        callFindBooking().then(data => setBookings(data));
    };

    return <Start getBookings={getBookings} bookings={bookings} />
};

export default StartContainer;