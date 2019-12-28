import React from "react";
import moment from "moment";

import { Tag, Card, Column } from "../../components";
import { Nav, Container } from "../../modules";

import * as style from "./Calendar.style";

const Calendar = ({ bookings }) => {

    return (
        <>
            <Nav title="Calendar" />

            <Container>
                <Column width="small">
                    {bookings.map(item => (
                        <Card space={true} key={item._id}>
                            <style.Tags>
                                {item.service.map(service => (
                                    <Tag label={service.label.toUpperCase()} />
                                ))}

                                <Tag label={item.status.toUpperCase()} />
                            </style.Tags>

                            <p>{moment(item.start_date).format('MMMM Do YYYY')}</p>
                            <p>{item.start_time} — {item.end_time}</p>

                            <p>{item.customer}</p>
                        </Card>
                    ))}
                </Column>
            </Container>
        </>
    );
};

export default Calendar;