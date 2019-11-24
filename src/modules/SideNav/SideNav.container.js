import React, { useState } from "react";

import SideNav from "./SideNav";

const SideNavContainer = props => {
    const [toggle, setToggle] = useState(false);

    const toggleNav = () => setToggle(!toggle);

    return <SideNav toggle={toggle} toggleNav={toggleNav} />;
};

export default SideNavContainer;