import React from "react";
import moment from "moment";

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import * as style from "./UpcomingBookings.style";

const UpcomingBookings = props => {
    const bookingDates = props.bookings.map(x => moment(x.start_date).format('MM-DD-YYYY'));
    const todaysBookings = bookingDates.filter(x => x === moment(new Date()).format('MM-DD-YYYY'));

    if (props) {
        return (
            <>
                <style.Container>
                    <style.Header>
                        <h5 className="semibold">Today's Schedule</h5>
                        {todaysBookings.length !== 0 ?
                            <p>{`You have (${todaysBookings.length})
                                ${todaysBookings.length !== 1 ? "bookings" : "booking"} today.`}</p>
                            : <p>You have no bookings today.</p>}
                    </style.Header>

                    {todaysBookings !== 0 ?
                        <SimpleBar style={{ maxHeight: 700 }}>
                            {props.bookings.map(item => {
                                const date = moment(item.start_date).format('MM-DD-YYYY');
                                const active = date === moment(new Date()).format('MM-DD-YYYY');

                                if (active) {
                                    return (
                                        <div key={item._id}>
                                            <p>START TIME: {item.start_time}</p>
                                            <p>{item.user.username}</p>
                                            <p>END TIME: {item.end_time}</p>
                                        </div>
                                    );
                                };
                            })}
                        </SimpleBar> :
                        <p>It's quite empty here...</p>}
                </style.Container>
            </>
        );
    } return null;
};

export default UpcomingBookings;