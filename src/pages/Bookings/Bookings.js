import React from "react";

import { Spinner } from "../../components";
import { Nav, Container } from "../../modules";

const Bookings = ({ bookings }) => {

    if (bookings) {
        return (
            <>
                <Nav title="Bookings" />

                <Container>
                    {bookings.map(booking => (
                        <>
                            {booking.startTime}
                            {booking.customer}
                        </>
                    ))}
                </Container>
            </>
        );
    } return <Spinner delay={750} />
};

export default Bookings;