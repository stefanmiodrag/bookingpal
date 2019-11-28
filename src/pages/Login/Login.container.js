import React, { useState } from "react";

import { callLogIn } from "../../api/auth";

import Login from "./Login";

const LoginContainer = props => {
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [state, setState] = useState({
        password: "",
        email: ""
    })

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const displayErrorMessage = () => {
        setError(true);
        setTimeout(() => { setError(false) }, 4000)
    };

    const removeErrorMessage = () => setError(false);

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const onLoginClick = e => {
        e.preventDefault();

        if (state.email && state.password) {
            callLogIn(state.email, state.password);
        } else {
            displayErrorMessage();
        };
    };

    return (
        <Login
            error={error}
            removeErrorMessage={removeErrorMessage}
            onLoginClick={onLoginClick}
            handleChange={handleChange}
            password={state.password}
            email={state.email}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
        />
    );
};

export default LoginContainer;