import React, { useState } from "react";
import { useSelector } from "react-redux";

import Settings from "./Settings";

import { stringToSlug } from "../../helpers";
import { callSignup, callUpdateUser } from "../../api/auth";
import { callNewCompany, } from "../../api/company";

import store from "../../store";
import { init } from "../../actions";

import { selectUser } from "../../selectors/user";
import { selectCompany } from "../../selectors/company";

const SettingsContainer = () => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [complete, setComplete] = useState(false);

    const [state, setState] = useState({
        companyName: "",
        password: "",
        email: "",
        username: "",
        role: "user",
    });

    const user = useSelector(selectUser);
    const company = useSelector(selectCompany);

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const displayErrorMessage = () => {
        setError(true);
        setTimeout(() => { setError(false) }, 4000);
    };

    const removeErrorMessage = () => setError(false);

    const saveOnClick = e => {
        e.preventDefault();

        // TODO: handle POST / PUT events here

        store.dispatch(init());
        callUpdateUser(company[0]);
        // window.location.reload(false);
    }

    const onNewCompanyClick = e => {
        e.preventDefault();

        const { companyName } = state;

        if (companyName) {
            callNewCompany(companyName, stringToSlug(companyName), [user._id])
                .then(setComplete(true))
                .catch(err => {
                    if (err.status === 400) {
                        setErrorMessage("There already exists a company under this name.")
                        displayErrorMessage();
                    }
                })
        } else {
            setErrorMessage("Please provide a name for your company.")
            displayErrorMessage();
        };
    };

    const onSignupClick = e => {
        e.preventDefault();

        callSignup(state.email, state.username, state.password, company[0], state.role);
    };

    return (
        <Settings
            user={user}
            onNewCompanyClick={onNewCompanyClick}
            company={company}
            onSignupClick={onSignupClick}
            email={state.email}
            username={state.username}
            password={state.password}
            role={state.role}
            handleChange={handleChange}
            companyName={state.companyName}
            complete={complete}
            saveOnClick={saveOnClick}
            error={error}
            errorMessage={errorMessage}
            removeErrorMessage={removeErrorMessage}
        />);
};

export default SettingsContainer;