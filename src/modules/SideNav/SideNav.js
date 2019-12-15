import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@blueprintjs/core";

import { Tag } from "../../components";

import * as style from "./SideNav.style";

const SideNav = ({ isLoggedIn, user, toggle, closeNav, openNav }) => {
    if (isLoggedIn) {
        return (
            <style.SideNav toggle={toggle}>
                <style.Container>
                    <style.Header toggle={toggle}>
                        <style.Mark>
                            <span>bark</span>
                            <Tag label="BETA" theme="secondary" />
                        </style.Mark>
                    </style.Header>

                    <style.List toggle={toggle}>
                        <li>
                            <NavLink to="/" exact activeClassName="active">
                                <Icon className="icon" icon="dashboard" iconSize={16} title="dashboard" />
                                <span className="name">Dashboard</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/calendar" exact>
                                <Icon className="icon" icon="calendar" iconSize={16} title="calendar" />
                                <span className="name">Calendar</span>
                            </NavLink>
                        </li>
                    </style.List>

                    <style.List toggle={toggle}>
                        <style.Title toggle={toggle}>Analyze</style.Title>

                        <li>
                            <NavLink to="/reports" exact activeClassName="active">
                                <Icon className="icon" icon="clipboard" iconSize={16} title="clipboard" />
                                <span className="name">Reports</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/insights" exact activeClassName="active">
                                <Icon className="icon" icon="timeline-bar-chart" iconSize={16} title="timeline-bar-chart" />
                                <span className="name">Insights</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/bookmarks" exact activeClassName="active">
                                <Icon className="icon" icon="star" iconSize={16} title="star" />
                                <span className="name">Saved Reports</span>
                            </NavLink>
                        </li>
                    </style.List>

                    <style.List toggle={toggle}>
                        <style.Title toggle={toggle}>Manage</style.Title>

                        <li>
                            <NavLink to="/booking">
                                <Icon className="icon" icon="folder-close" iconSize={16} title="folder-close" />
                                <span className="name">Bookings</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/customers" exact>
                                <Icon className="icon" icon="mugshot" iconSize={16} title="mugshot" />
                                <span className="name">Customers</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/catalog">
                                <Icon className="icon" icon="tag" iconSize={16} title="tag" />
                                <span className="name">Catalog</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/settings" exact>
                                <Icon className="icon" icon="cog" iconSize={16} title="settings" />
                                <span className="name">Settings</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/subscription" exact>
                                <Icon className="icon" icon="credit-card" iconSize={16} title="credit-card" />
                                <span className="name">Subscription</span>
                            </NavLink>
                        </li>
                    </style.List>

                    {/* 
                    <style.Toggle toggle={toggle}>
                        <button onClick={toggle ? closeNav : openNav}>
                            <Icon className="icon" icon={toggle ? "menu-open" : "menu-closed"} iconSize={16} title="toggle-menu" />
                        </button>
                    </style.Toggle> */}

                    {/* TODO:    
                    <style.User title="More Options">
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </style.User> */}
                </style.Container>
            </style.SideNav>
        );
    } return null;
};

export default SideNav;