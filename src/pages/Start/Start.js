import React, { useEffect } from "react";

import { dayOfTheWeek } from "../../helpers";
import { UpcomingBookings } from "../../modules";
import { ButtonLink } from "../../components";

import * as style from "./Start.style";

const Start = ({ user, getBookings, bookings }) => {
    useEffect(() => {
        getBookings();
    }, []);

    if (user) {
        return (
            <>
                <style.FullColumn>
                    <h3 className="semibold">Hi {user.username}, happy {dayOfTheWeek()}!
                        <span role="img" aria-label="wave">👋</span></h3>
                    <p>Here's what's happening today.</p>

                    <ButtonLink path="/booking/new" label="New booking" theme="success" />
                </style.FullColumn>

                <style.SmallColumn>
                    <UpcomingBookings bookings={bookings} />
                </style.SmallColumn>
            </>
        );
    } return null;
};

export default Start;