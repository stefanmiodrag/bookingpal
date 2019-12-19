import React from "react";

import { Card, Column, Spinner, Tag, ButtonLink } from "../../components";
import { Nav, Container } from "../../modules";

import * as style from "./Bookings.style";

const Bookings = ({ bookings, search, handleChange, filteredItems }) => {

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
                    onSearch={handleChange}
                    searchValue={search}
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
                        <Column width="small">
                            {filteredItems.length !== 0 ? filteredItems.map(booking => (
                                <Card space={true} key={booking._id}>

                                    <Tag label={booking.service.label.toUpperCase()} />
                                    <p>START TIME: {booking.startTime}</p>
                                    <p>{booking.customer}</p>

                                </Card>
                            )) : <p>Nothing's here, try a different searching term.</p>}
                        </Column> :
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