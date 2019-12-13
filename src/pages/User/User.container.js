import React, { useState } from "react";
import { useSelector } from "react-redux";

import User from "./User";

import { stringToSlug } from "../../helpers";
import { callNewCompany } from "../../api/company";
import { callUpdateUser } from "../../api/auth";

import store from "../../store";
import { init } from "../../actions";

import { selectUser } from "../../selectors/user";
import { selectCompany } from "../../selectors/company";

const UserContainer = () => {
    const [complete, setComplete] = useState(false);
    const [state, setState] = useState({
        companyName: "",
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

    const saveOnClick = e => {
        e.preventDefault();

        // TODO: handle POST / PUT events here

        store.dispatch(init());
        window.location.reload(false);
    }

    const onNewCompanyClick = e => {
        e.preventDefault();

        const { companyName } = state;

        if (companyName, user._id) {
            callNewCompany(companyName, stringToSlug(companyName), [user._id])
                .then(alert("complete!"))
                .then(setComplete(true))
                .catch(err => {
                    if (err.status === 401) {
                        alert("401")
                    }
                })
        } else {
            alert("Missing fields");
        };
    };

    return (
        <User
            user={user}
            onNewCompanyClick={onNewCompanyClick}
            company={company}
            handleChange={handleChange}
            companyName={state.companyName}
            complete={complete}
            saveOnClick={saveOnClick}
        />);
};

export default UserContainer;