import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Settings from "./Settings";

import { stringToSlug } from "../../helpers";
import { callSignup, callUpdateUser } from "../../api/auth";
import { callUpdateCompany } from "../../api/company";

import store from "../../store";
import { init, logOut } from "../../actions";

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
        password: "",
        email: "",
        username: "",
        role: "user",
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

    const saveOnClick = e => {
        e.preventDefault();

        // TODO: handle POST / PUT events here

        store.dispatch(init());
        callUpdateUser(company[0]);
        // window.location.reload(false);
    }

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

    console.log(state.message)

    const onSignupClick = e => {
        e.preventDefault();

        callSignup(state.email, state.username, state.password, company[0], state.role);
    };

    const onLogoutCLick = () => dispatch(logOut());

    return (
        <Settings
            user={user}
            allUsers={allUsers}
            onUpdateCompanyClick={onUpdateCompanyClick}
            company={company}
            onSignupClick={onSignupClick}
            email={state.email}
            username={state.username}
            password={state.password}
            role={state.role}
            handleChange={handleChange}
            color={state.color}
            message={state.message}
            complete={complete}
            saveOnClick={saveOnClick}
            error={error}
            errorMessage={errorMessage}
            removeErrorMessage={removeErrorMessage}
            onLogoutCLick={onLogoutCLick}
        />);
};

export default SettingsContainer;