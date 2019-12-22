import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { callSignup } from "../../api/auth";

import Register from "./Register";

const RegisterContainer = () => {
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);

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

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const onSignupClick = e => {
        e.preventDefault();

        callSignup(state.email, state.username, state.password, null, "admin");
    };

    return (
        <Register
            onSignupClick={onSignupClick}
            handleChange={handleChange}
            username={state.username}
            password={state.password}
            email={state.email}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
        />
    );
};

export default RegisterContainer;