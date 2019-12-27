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
                        <style.Container>
                            <h4>Hi {user.username}, happy {dayOfTheWeek(today)}! {' '}
                                <span role="img" aria-label="wave">👋</span></h4>
                            <p className="light-color">Here's what's happening today.</p>

                            <ButtonLink
                                path="/booking/new"
                                theme="success"
                                label="New booking"
                            />
                        </style.Container>
                    </Column>

                    <Column width="small">
                        <UpcomingBookings
                            bookings={bookings}
                        />
                    </Column>
                </Container>
            </>
        );
    } return null;
};

export default Start;