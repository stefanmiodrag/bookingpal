import React, { useState } from "react";

import SideNav from "./SideNav";

const SideNavContainer = props => {
    const [toggle, setToggle] = useState(false);

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

    return <SideNav toggle={toggle} openNav={openNav} closeNav={closeNav} />;
};

export default SideNavContainer;