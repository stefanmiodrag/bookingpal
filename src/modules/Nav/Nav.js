import React from "react";

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../selectors/authentication';

import * as style from "./Nav.style";

const Nav = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (isLoggedIn) {
        return (
            <style.Nav>
            </style.Nav>
        )
    } return null;
};

export default Nav;