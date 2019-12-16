import React from "react";

import { Spinner, ButtonLink } from "../../components";
import { Nav, Container } from "../../modules";

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
                    <ButtonLink path="/booking/new" label="New Booking" theme="success" />

                    {bookings.length !== 0 ?
                        bookings.map(booking => (
                            <>
                                {booking.startTime}
                                {booking.customer}
                            </>
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