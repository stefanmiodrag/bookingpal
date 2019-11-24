import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@blueprintjs/core";

import * as style from "./SideNav.style";

const SideNav = ({ toggle, closeNav, openNav }) => (
    <style.SideNav toggle={toggle}>
        <style.Container>
            <style.Header toggle={toggle}>
                <h3>bookingpal</h3>
            </style.Header>

            <style.List>
                <li>
                    <NavLink to="/" exact activeClassName="active">
                        <Icon icon="dashboard" iconSize={20} title="dashboard" />
                        <span className="name">Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/calendar" exact>
                        <Icon icon="calendar" iconSize={20} title="calendar" />
                        <span className="name">Calendar</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/catalog" exact>
                        <Icon icon="layers" iconSize={20} title="catalog" />
                        <span className="name">Catalog</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/customers" exact>
                        <Icon icon="people" iconSize={20} title="customers" />
                        <span className="name">Customers</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/orders" exact>
                        <Icon icon="inbox" iconSize={20} title="orders" />
                        <span className="name">Orders</span>
                    </NavLink>
                </li>
            </style.List>

            <style.List>
                <li>
                    <NavLink to="/help" exact>
                        <Icon icon="help" iconSize={20} title="support" />
                        <span className="name">Support</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/settings" exact>
                        <Icon icon="cog" iconSize={20} title="settings" />
                        <span className="name">Settings</span>
                    </NavLink>
                </li>
            </style.List>

            <style.Toggle toggle={toggle}>
                <button onClick={toggle ? closeNav : openNav}>
                    <Icon icon={toggle ? "menu-open" : "menu-closed"} iconSize={20} title="toggle-menu" />
                </button>
            </style.Toggle>
        </style.Container>
    </style.SideNav>
);

export default SideNav;