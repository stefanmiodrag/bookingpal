import React from "react";

import { Switch, Route } from "react-router-dom";
import { loggedInRoutes, loggedOutRoutes } from "./Router.config";

import { Page } from "./modules";

export default ({ isLoggedIn }) => {
    return (
        <Page>
            <Switch>
                {(isLoggedIn ? loggedInRoutes : loggedOutRoutes)
                    .map((route, i) => (
                        <Route
                            key={i}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        />
                    ))}
            </Switch>
        </Page>
    );
};