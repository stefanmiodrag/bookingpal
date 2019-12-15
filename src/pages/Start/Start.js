import React, { useEffect } from "react";

import { dayOfTheWeek } from "../../helpers";
import { Nav, Container, UpcomingBookings } from "../../modules";
import { Column, ButtonLink } from "../../components";

import * as style from "./Start.style";

const Start = ({ user, getBookings, bookings }) => {
    useEffect(() => {
        getBookings();
    }, []);

    if (user) {
        return (
            <>
                <Nav title="Dashboard" />

                <Container>
                    <Column width="large">
                        <h3 className="semibold">Hi {user.username}, happy {dayOfTheWeek()}! {' '}
                            <span role="img" aria-label="wave">👋</span></h3>
                        <p>Here's what's happening today.</p>

                        <ButtonLink path="/booking/new" label="New booking" theme="success" />
                    </Column>

                    <Column width="small">
                        <UpcomingBookings bookings={bookings} />
                    </Column>
                </Container>
            </>
        );
    } return null;
};

export default Start;