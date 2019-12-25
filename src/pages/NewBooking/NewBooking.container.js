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

        const { service, customer, startTime } = state;

        if (customer && startTime) {
            callNewBooking(service, customer, startTime, String(calculateDuration()))
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
        const { customer, service, startTime } = state;

        if (customer && service && startTime) {
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