import React from "react";

import { Card, Spinner, ButtonLink } from "../../components";
import { Nav, Container } from "../../modules";

import * as style from "./Bookings.style";

const Bookings = ({ bookings }) => {

    if (bookings) {
        return (
            <>
                <Nav
                    title="Bookings"
                    breadcrumbs={[
                        {
                            label: "Bookings",
                            path: "/booking"
                        }
                    ]}
                />

                <Container>
                    <style.Container>
                        <ButtonLink
                            theme="success"
                            path="/booking/new"
                            label="New Booking"
                        />
                    </style.Container>

                    {bookings.length !== 0 ?
                        bookings.map(booking => (
                            <Card space={true} key={booking._id}>
                                <p>STATUS: {booking.status}</p>

                                <p>START TIME: {booking.startTime}</p>
                                <p>{booking.customer}</p>
                            </Card>
                        )) :
                        <>
                            <h4 className="thin">Just some empty boxes here...</h4>
                            <p className="light-color">Fill your catalog with services.</p>
                        </>}
                </Container>
            </>
        );
    } return <Spinner delay={750} />
};

export default Bookings;