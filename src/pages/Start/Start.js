import React from "react";
import getDay from "date-fns/getDay";

import { dayOfTheWeek } from "../../helpers";
import { Nav, Container, UpcomingBookings } from "../../modules";
import { Column, ButtonLink } from "../../components";

import * as style from "./Start.style";

const Start = ({ user, bookings }) => {
    const today = getDay(new Date());

    if (user && bookings) {
        return (
            <>
                <Nav title="Dashboard" />

                <Container>
                    <Column width="large">
                        <h4 className="light">Hi {user.username}, happy {dayOfTheWeek(today)}! {' '}
                            <span role="img" aria-label="wave">👋</span></h4>
                        <p className="light-color">Here's what's happening today.</p>

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