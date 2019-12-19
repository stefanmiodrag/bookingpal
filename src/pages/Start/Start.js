import React from "react";
import moment from "moment";
import getDay from "date-fns/getDay";

import { dayOfTheWeek } from "../../helpers";
import { Nav, Container, UpcomingBookings } from "../../modules";
import { Column, ButtonLink, Notice } from "../../components";

import * as style from "./Start.style";

const Start = ({ user, bookings }) => {
    const today = getDay(new Date());

    if (user && bookings) {
        return (
            <>
                <Nav title="Dashboard" />

                <Container>
                    <Column width="small">
                        <Notice>
                            <p>Upgrade to an annual plan before January 17th - get an extra 20% off!</p>
                        </Notice>
                    </Column>

                    <Column width="large">
                        <style.Container>
                            <h4 className="light">Hi {user.username}, happy {dayOfTheWeek(today)}! {' '}
                                <span role="img" aria-label="wave">👋</span></h4>
                            <p className="light-color">Here's what's happening today.</p>

                            <ButtonLink path="/booking/new" label="New booking" theme="success" />
                        </style.Container>
                    </Column>

                    <Column width="small">
                        <UpcomingBookings
                            date={moment('2010-01-01').isSame(new Date(), 'day')}
                            bookings={bookings}
                        />
                    </Column>
                </Container>
            </>
        );
    } return null;
};

export default Start;