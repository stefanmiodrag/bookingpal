import React from "react";

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import * as style from "./UpcomingBookings.style";

const UpcomingBookings = props => {
    if (props) {
        return (
            <>
                <style.Container>
                    <style.Header>
                        <h5 className="semibold">Today's Schedule</h5>
                        {props.bookings.length >= 0 ?
                            <p>{`You have (${props.bookings.length})
                                ${props.bookings.length !== 1 ? "bookings" : "booking"} today.`}</p>
                            : <p>You have no bookings today.</p>}
                    </style.Header>

                    {props.bookings.length >= 0 ?
                        <SimpleBar style={{ maxHeight: 700 }}>
                            {props.bookings.map(item => {
                                return (
                                    <>
                                        <p>START TIME: {item.startTime}</p>
                                        <p>{item.user.username}</p>
                                        <p>END TIME: {item.endTime}</p>
                                    </>
                                );
                            })}
                        </SimpleBar> :
                        <p>It's quite empty here...</p>}
                </style.Container>
            </>
        );
    } return null;
};

export default UpcomingBookings;