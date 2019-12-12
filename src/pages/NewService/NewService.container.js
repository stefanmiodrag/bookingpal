import React, { useState } from "react";

import { stringToSlug } from "../../helpers";
import { callNewService } from "../../api/service"

import NewService from "./NewService";

const NewServiceContainer = props => {
    const [state, setState] = useState({
        name: "",
        durationHour: "",
        durationMinutes: "",
        price: "",
        currency: "sek",
    });

    const duration = state.durationHour + ':' + state.durationMinutes;

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const onNewServiceClick = e => {
        e.preventDefault();

        const { name, price, currency } = state;

        if (name && duration && price && currency) {
            callNewService(name, stringToSlug(name), duration, price, currency)
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
        const { name, price } = state;

        if (name && duration && price) {
            return false;
        } return true;
    };

    return (
        <NewService
            handleChange={handleChange}
            onNewServiceClick={onNewServiceClick}
            name={state.name}
            duration={state.duration}
            price={state.price}
            currency={state.currency}
            isFormValid={isFormValid}
        />);
};

export default NewServiceContainer;