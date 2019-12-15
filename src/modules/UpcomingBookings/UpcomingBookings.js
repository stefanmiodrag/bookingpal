import React from "react";

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { Card } from "../../components";

import * as style from "./UpcomingBookings.style";

const UpcomingBookings = props => {
    if (props) {
        console.log(props.bookings)
        return (
            <>
                <style.Container>
                    <style.Header>
                        <h4 className="semibold">Today's Schedule</h4>
                        {props.bookings.length <= 0 ?
                            <p>You have no bookings today.</p> :
                            <p>{`You have (${props.bookings.length}) ${props.bookings.length !== 1 ? "bookings" : "booking"} today.`}</p>}
                    </style.Header>

                    {props.bookings &&
                        <SimpleBar style={{ maxHeight: 700 }}>
                            {props.bookings.map(item => {
                                return (
                                    <>
                                        <p>{item.startTime}</p>
                                        <p>{item.user.username}</p>
                                    </>
                                );
                            })}
                        </SimpleBar>}
                </style.Container>
            </>
        );
    } return null;
};

export default UpcomingBookings;