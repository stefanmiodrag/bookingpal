import React, { useState } from "react";

import { useSelector } from "react-redux";
import { callNewBooking } from "../../api/booking";
import { selectProducts } from "../../selectors";

import NewBooking from "./NewBooking";

const NewBookingContainer = () => {
    const products = useSelector(selectProducts);

    const [state, setState] = useState({
        service: "", // TODO: Set default if select hasn't triggered onChange event
        customer: "",
        startTimeHour: "",
        startTimeMinutes: "",
    });

    const startTime = {
        hour: state.startTimeHour,
        minutes: state.startTimeMinutes,
    };

    const calculateDuration = () => {
        if (products === undefined) { return };

        const allProducts = products.map(product => (product));
        const matchingProduct = allProducts.filter(x => x.slug === state.service.value)

        const { startTimeHour, startTimeMinutes } = state;

        const hour = startTimeHour;
        const minutes = startTimeMinutes;

        const endHour = matchingProduct[0] && matchingProduct[0].duration.hour;
        const endMinutes = matchingProduct[0] && matchingProduct[0].duration.minutes;

        const endTime = {
            hour: Number(hour) + Number(endHour),
            minutes: Number(minutes) + Number(endMinutes),

            /* PROPERLY CALCULATE DURATION WITH A HELPER FUNCTION */
        }

        console.log(endTime)

        return endTime;
    };

    calculateDuration();

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const handleSelect = (selected) => {
        setState({
            ...state,
            service: selected
        })
    }

    const onNewBookingClick = e => {
        e.preventDefault();

        const { service, customer } = state;

        if (customer && startTime) {
            callNewBooking(service, customer, startTime, calculateDuration())
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
        const { customer, service, startTimeHour, startTimeMinutes } = state;

        if (customer && service && startTimeHour && startTimeMinutes) {
            return false;
        } return true;
    };

    return (
        <NewBooking
            service={state.service}
            customer={state.customer}
            startTime={state.startTime}
            endTime={state.endTime}
            handleSelect={handleSelect}
            handleChange={handleChange}
            onNewBookingClick={onNewBookingClick}
            isFormValid={isFormValid}
            products={products}
        />);
};

export default NewBookingContainer;