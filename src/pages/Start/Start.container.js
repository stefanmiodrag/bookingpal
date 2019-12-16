import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectUser, selectBookings } from "../../selectors";

import Start from "./Start";

const StartContainer = () => {
    const user = useSelector(selectUser);
    const bookings = useSelector(selectBookings);

    return (
        <Start
            user={user}
            bookings={bookings}
        />);
};

export default StartContainer;