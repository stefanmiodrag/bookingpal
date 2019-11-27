import React from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { Card } from "../../components";

import * as style from "./UpcomingAppointments.style";

const SAMPLE_BOOKING_DATA = {
    bookings: [
        {
            id: 1,
            title: "Q4 Marketing w/Sarah",
            start_date: 6.30,
            end_date: 8.00
        },
        {
            id: 2,
            title: "Sprint Planning",
            start_date: 8.30,
            end_date: 9.00
        }
    ]
}

const UpcomingAppointments = props => {
    return (
        <>
            <style.Container>
                <style.Header>
                <h4 className="semibold">Today's Schedule</h4>
                <p>You have (8) appointments today.</p>
                </style.Header>

                <SimpleBar style={{ maxHeight: 700 }}>

                    {/* {SAMPLE_BOOKING_DATA.bookings.map(item => {
                        const maxWidth = 100; // px
                        const eventLength = Number(item.end_date) - Number(item.start_date);

                        const width = Math.round(eventLength * maxWidth);

                        console.log(width)

                        return (
                            <>
                                <style.Event>
                                    <style.Date>STARTING {item.start_date}</style.Date>
                                    <style.Card width={width}>
                                        {item.title}
                                    </style.Card>
                                    <style.Date>ENDING {item.end_date}</style.Date>
                                </style.Event>
                            </>
                        );
                    })} */}

                </SimpleBar>
            </style.Container>
        </>
    );
};

export default UpcomingAppointments