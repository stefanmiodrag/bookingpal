import React, { useState } from "react";

import { logIn } from '../../actions';
import { useDispatch } from 'react-redux';

import { callSignup, setToken, callLogIn } from "../../api/auth";

import Login from "./Login";

const LoginContainer = props => {
    const dispatch = useDispatch();

    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [signup, setSignup] = useState(false);
    const [state, setState] = useState({
        password: "",
        email: "",
        username: "",
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
            dispatch(logIn(state.email, state.password));
        };
    };

    const toggleSignup = () => setSignup(!signup);

    const onSignupClick = e => {
        e.preventDefault();

        callSignup(state.email, state.username, state.password);
    };

    return (
        <Login
            error={error}
            removeErrorMessage={removeErrorMessage}
            onLoginClick={onLoginClick}
            onSignupClick={onSignupClick}
            handleChange={handleChange}
            username={state.username}
            password={state.password}
            email={state.email}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            signup={signup}
            toggleSignup={toggleSignup}
        />
    );
};

export default LoginContainer;