import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { logIn } from '../../actions';
import { callSignup } from "../../api/auth";

import Login from "./Login";

const LoginContainer = () => {
    const dispatch = useDispatch();

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
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
        setTimeout(() => { setError(false) }, 4000);
    };

    const removeErrorMessage = () => setError(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);

    const onLoginClick = e => {
        e.preventDefault();

        const { email, password } = state;

        if (email && password) {
            // setLoading(true); toggle on later for including loading animation

            return dispatch(logIn(email, password))
                .catch(err => {
                    // setLoading(false);

                    if (err.status === 401) {
                        setErrorMessage("Couldn't find a matching user with these credentials.")
                        displayErrorMessage();
                    }
                })
        }

        setErrorMessage("Please provide both an email and a password.")
        displayErrorMessage();
    };

    const toggleSignup = () => setSignup(!signup);

    const onSignupClick = e => {
        e.preventDefault();

        callSignup(state.email, state.username, state.password, null, "admin");
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
            errorMessage={errorMessage}
        // loading={loading}
        />
    );
};

export default LoginContainer;