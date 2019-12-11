import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectUser } from "../../selectors/user";

import { callFindBooking } from "../../api/booking";

import Start from "./Start";

const StartContainer = props => {
    const [bookings, setBookings] = useState("");

    const user = useSelector(selectUser);

    const getBookings = () => {
        callFindBooking().then(data => setBookings(data));
    };

    return (
        <Start
            page={props}
            user={user}
            getBookings={getBookings}
            bookings={bookings}
        />);
};

export default StartContainer;