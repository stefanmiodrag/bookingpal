import React, { useState } from "react";

import { callFindBooking } from "../../api/booking";

import Start from "./Start";

const StartContainer = props => {
    const [bookings, setBookings] = useState("");

    const getBookings = () => {
        const userId = "5de4817b-fd46-4b9e-bc1b-9afb5de6e7b8";

        callFindBooking(userId).then(data => setBookings(data));
    };

    return <Start getBookings={getBookings} bookings={bookings} />
};

export default StartContainer;