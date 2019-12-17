import React, { useState } from "react";

import { useSelector } from "react-redux";
import { callNewBooking } from "../../api/booking";
import { selectProducts } from "../../selectors";

import NewBooking from "./NewBooking";

const NewBookingContainer = props => {
    const products = useSelector(selectProducts);

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

        if (customer && startTime) {
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
        const { customer, startTimeHour, startTimeMinutes } = state;

        if (customer && startTimeHour && startTimeMinutes) {
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
            products={products}
        />);
};

export default NewBookingContainer;