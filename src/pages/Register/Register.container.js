import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { stringToSlug } from "../../helpers";

import { callSignup } from "../../api/auth";

import Register from "./Register";

const RegisterContainer = () => {
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);

    const [state, setState] = useState({
        password: "",
        email: "",
        username: "",
        company: "",
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

        const { email, username, password, company } = state;

        callSignup(email, username, password, company, stringToSlug(company), "admin")
    };

    return (
        <Register
            onSignupClick={onSignupClick}
            handleChange={handleChange}
            username={state.username}
            company={state.company}
            password={state.password}
            email={state.email}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
        />
    );
};

export default RegisterContainer;