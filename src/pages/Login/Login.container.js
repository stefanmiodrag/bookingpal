import React, { useState } from "react";

import { callLogIn } from "../../api/auth";

import Login from "./Login";

const LoginContainer = props => {
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

    const onLoginClick = e => {
        e.preventDefault();

        if (state.email && state.password) {
            callLogIn(state.email, state.password).catch(err => {
                if (err.status === 401) {
                    console.log("BAD_CREDENTIALS")
                }
            });
        };
    };

    return (
        <Login
            onLoginClick={onLoginClick}
            handleChange={handleChange}
            password={state.password}
            email={state.email}
        />
    );
};

export default LoginContainer;