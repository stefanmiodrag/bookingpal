import React, { useState } from "react";
import moment from "moment";

import { useSelector } from "react-redux";
import { callNewBooking } from "../../api/booking";
import { selectProducts } from "../../selectors";

import NewBooking from "./NewBooking";

const NewBookingContainer = () => {
    const products = useSelector(selectProducts);

    const [state, setState] = useState({
        service: "", // TODO: Set default if select hasn't triggered onChange event
        customer: "",
        selectedDay: "",
        startTime: "",
    });

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
    };

    const handleDayClick = (selected) => {
        setState({
            ...state,
            selectedDay: selected
        })
    };

    const calculateDuration = () => {
        if (products === undefined) { return };

        const allProducts = products.map(product => (product));
        const matchingProduct = allProducts.filter(x => x.slug === state.service.value)

        const time = matchingProduct[0] && matchingProduct[0].duration.split(':');
        const startTime = state.startTime.split(':');

        const endTime = time && moment().hour(String(startTime[0])).minute(String(startTime[1]))
            .add(String(time[0]), 'hours').add(String(time[1]), 'minutes').format("HH:mm");

        return endTime;
    };

    const onNewBookingClick = e => {
        e.preventDefault();

        const { service, customer, selectedDay, startTime } = state;

        callNewBooking(service, customer, selectedDay, startTime, calculateDuration())
            .then(alert("complete!"))
            .catch(err => {
                if (err.status === 401) {
                    alert("401")
                }
            })
    };

    const isFormValid = () => {
        return false;
    };

    return (
        <NewBooking
            service={state.service}
            customer={state.customer}
            startTime={state.startTime}
            endTime={state.endTime}
            handleSelect={handleSelect}
            handleDayClick={handleDayClick}
            selectedDay={state.selectedDay}
            handleChange={handleChange}
            onNewBookingClick={onNewBookingClick}
            isFormValid={isFormValid}
            products={products}
        />);
};

export default NewBookingContainer;