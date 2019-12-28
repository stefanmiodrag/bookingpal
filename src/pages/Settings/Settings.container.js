import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Settings from "./Settings";

import { callUpdateCompany } from "../../api/company";

import { logOut } from "../../actions";

import { selectUser, selectUsers } from "../../selectors/user";
import { selectCompany } from "../../selectors/company";

const SettingsContainer = () => {
    const dispatch = useDispatch();

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [complete, setComplete] = useState(false);

    const user = useSelector(selectUser);
    const allUsers = useSelector(selectUsers);
    const company = useSelector(selectCompany);

    const [state, setState] = useState({
        color: company[0].customize_settings ? company[0].customize_settings.theme_color : "",
        message: company[0].customize_settings ? company[0].customize_settings.welcome_message : "",
    });

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

    const onUpdateCompanyClick = e => {
        e.preventDefault();

        const { color, message } = state;

        callUpdateCompany(color, message)
            .then(setComplete(true))
            .catch(err => {
                if (err.status === 400) {
                    setErrorMessage("Error")
                    displayErrorMessage();
                }
            })
    };

    const onLogoutCLick = () => dispatch(logOut());

    return (
        <Settings
            user={user}
            allUsers={allUsers}
            onUpdateCompanyClick={onUpdateCompanyClick}
            company={company}
            email={state.email}
            username={state.username}
            password={state.password}
            role={state.role}
            handleChange={handleChange}
            color={state.color}
            message={state.message}
            complete={complete}
            error={error}
            errorMessage={errorMessage}
            removeErrorMessage={removeErrorMessage}
            onLogoutCLick={onLogoutCLick}
        />);
};

export default SettingsContainer;