import React, { useState } from "react";

import { stringToSlug } from "../../helpers";
import { callNewCatalog } from "../../api/catalog"

import NewCatalog from "./NewCatalog";

const NewCatalogContainer = () => {
    const [state, setState] = useState({
        name: "",
    });

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const onNewCatalogClick = e => {
        e.preventDefault();

        const { name } = state;

        if (name) {
            callNewCatalog(name, stringToSlug(name))
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
        const { name } = state;

        if (name) {
            return false;
        } return true;
    };

    return (
        <NewCatalog
            handleChange={handleChange}
            onNewCatalogClick={onNewCatalogClick}
            name={state.name}
            isFormValid={isFormValid}
        />);
};

export default NewCatalogContainer;