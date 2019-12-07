import React, { useState } from "react";

import { formatTime } from "../../helpers";
import { callNewBooking } from "../../api/booking";

import NewBooking from "./NewBooking";

const NewBookingContainer = props => {
    const [state, setState] = useState({
        service: "",
        customer: "",
        startTimeHour: "",
        startTimeMinutes: "",
        endTimeHour: "",
        endTimeMinutes: "",
    });

    const startTime = state.startTimeHour + ':' + state.startTimeMinutes;
    const endTime = state.endTimeHour + ':' + state.endTimeMinutes;

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const onNewBookingClick = e => {
        e.preventDefault();

        const { service, customer } = state;

        if (service && customer && startTime && endTime) {
            callNewBooking(service, customer, startTime, endTime);
        } else {
            alert("Error");
        };
    };

    const isFormValid = () => {
        const { service, customer } = state;

        if (service && customer && startTime && endTime) {
            return false;
        } return true;
    };

    return (
        <NewBooking
            service={state.service}
            customer={state.customer}
            startTime={state.startTime}
            endTime={state.endTime}
            handleChange={handleChange}
            onNewBookingClick={onNewBookingClick}
            isFormValid={isFormValid}
        />);
};

export default NewBookingContainer;