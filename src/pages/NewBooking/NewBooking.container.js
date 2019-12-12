import React, { useState } from "react";

import { callFindService } from "../../api/service";
import { callNewBooking } from "../../api/booking";

import NewBooking from "./NewBooking";

const NewBookingContainer = props => {
    const [services, setServices] = useState("");
    const [state, setState] = useState({
        service: "", // TODO: Set default if select hasn't triggered onChange event
        customer: "",
        startTimeHour: "",
        startTimeMinutes: "",
    });

    const startTime = state.startTimeHour + ':' + state.startTimeMinutes;
    const endTime = "";

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
            callNewBooking(service, customer, startTime, endTime)
                .then(alert("complete!"))
                .catch(err => {
                    if (err.status === 401) {
                        alert("401")
                    }
                })
        } else {
            alert("Missing fields");
        };
    };

    const isFormValid = () => {
        const { customer } = state;

        if (customer && startTime && endTime) {
            return false;
        } return true;
    };

    const getServices = () => {
        callFindService().then(data => setServices(data));
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
            services={services}
            getServices={getServices}
        />);
};

export default NewBookingContainer;