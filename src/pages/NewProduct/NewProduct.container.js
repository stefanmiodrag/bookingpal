import React, { useState } from "react";
import { useSelector } from "react-redux";

import { stringToSlug } from "../../helpers";
import { callNewProduct } from "../../api/product"
import { selectCatalogs } from "../../selectors";

import NewProduct from "./NewProduct";

const NewProductContainer = props => {
    const [state, setState] = useState({
        name: "",
        durationHour: "",
        durationMinutes: "",
        catalog: null,
        price: "",
        currency: "sek",
    });

    const catalogs = useSelector(selectCatalogs);

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
            catalog: selected
        })
    }

    const duration = state.durationHour + ':' + state.durationMinutes;

    const onNewProductClick = e => {
        e.preventDefault();

        const { name, price, catalog, currency } = state;

        if (name && duration && catalog && price && currency) {
            callNewProduct(name, stringToSlug(name), duration, catalog, price, currency)
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
        <NewProduct
            catalogs={catalogs}
            handleChange={handleChange}
            handleSelect={handleSelect}
            onNewProductClick={onNewProductClick}
            name={state.name}
            duration={state.duration}
            catalog={state.catalog}
            option={state.options}
            price={state.price}
            currency={state.currency}
            isFormValid={isFormValid}
        />);
};

export default NewProductContainer;