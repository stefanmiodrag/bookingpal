import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@blueprintjs/core";

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../selectors/authentication';

import { Input } from "../../components";

import * as style from "./Nav.style";

const Nav = (props) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (isLoggedIn) {
        return (
            <>
                <style.Nav>
                    <style.Container>
                        <style.Title>{props.title}</style.Title>

                        {props.onSearch &&
                            <Input
                                name="search"
                                type="text"
                                value={props.searchValue}
                                placeholder="Search for terms..."
                                onChange={props.onSearch}
                            />}
                    </style.Container>
                </style.Nav>

                {props.breadcrumbs &&
                    <style.Breadcrumb id="breadcrumbs">
                        <ul>
                            {props.breadcrumbs.map(breadcrumb => (
                                <li>
                                    <NavLink
                                        exact="true"
                                        activeClassName="active"
                                        to={breadcrumb.path}
                                    >
                                        {breadcrumb.label}
                                    </NavLink>
                                    <Icon icon="chevron-right" />
                                </li>
                            ))}
                        </ul>
                    </style.Breadcrumb>}
            </>
        )
    } return null;
};

export default Nav;