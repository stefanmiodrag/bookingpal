import React from "react";

const Page = props => (
    <div id="page" className={props.isLoggedIn ? "is-auth" : "not-auth"}>
        {props.children}
    </div>
);

export default Page;