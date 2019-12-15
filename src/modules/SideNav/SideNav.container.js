import React, { useState } from "react";

import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../selectors';

import SideNav from "./SideNav";

const SideNavContainer = () => {
    const [toggle, setToggle] = useState(false);

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    const openNav = () => {
        const app = document.getElementById("App");

        app.classList.add("small-nav");
        setToggle(true);
    };

    const closeNav = () => {
        const app = document.getElementById("App");

        app.classList.remove("small-nav");
        setToggle(false);
    };

    return (
        <SideNav
            isLoggedIn={isLoggedIn}
            user={user}
            toggle={toggle}
            openNav={openNav}
            closeNav={closeNav}
        />);
};

export default SideNavContainer;