import React from "react";
import Cleave from 'cleave.js/react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import {
    Tag,
    Card,
    Column,
    Toaster,
    Input,
    Label,
    Select,
    Button
} from "../../components";

import { Nav, Container } from "../../modules";

import * as style from "./Settings.style";

const User = ({
    user,
    allUsers,
    color,
    message,
    handleChange,
    onUpdateCompanyClick,
    company,
    onSignupClick,
    username,
    email,
    password,
    role,
    saveOnClick,
    complete,
    error,
    errorMessage,
    removeErrorMessage,
    onLogoutCLick,
}) => {
    if (user && company) {
        const isAdmin = user.role.toUpperCase() === "ADMIN";

        return (
            <>
                <Toaster
                    visible={error}
                    close={removeErrorMessage}
                    label={errorMessage}
                    theme="danger"
                />

                <Nav title={`Manage ${company.length !== 0 ?
                    company[0].name : "your profile"}`} />

                <Container>
                    <Column width="medium">
                        <style.Header>
                            {isAdmin &&
                                <p className="light-color">An overview of all the users that have access to this company.
                            You are the owner of this workspace, and only you can add, edit &amp; delete the users beneath.</p>}

                            <style.Buttons>
                                <Button icon="cog"></Button>
                                <Button label="Logout" onClick={onLogoutCLick} />
                            </style.Buttons>
                        </style.Header>

                        {/* <style.CardWrapper>
                            <style.UserHeader>
                                <span>NAME</span>

                                <span>ACCESS</span>
                            </style.UserHeader>
                            <style.Users>
                                <SimpleBar style={{ maxHeight: 200 }}>
                                    <ul>
                                        {allUsers.map(user => (
                                            <style.User key={user._id}>
                                                <span>{`${user.username} (${user.email})`}</span>

                                                <style.Tags>
                                                    <Tag label={user.role.toUpperCase()} />
                                                </style.Tags>
                                            </style.User>
                                        ))}
                                    </ul>
                                </SimpleBar>
                            </style.Users>
                        </style.CardWrapper> */}

                        <style.CardWrapper>
                            <Card space={true}>
                                <style.Divider>
                                    <h5>Customize</h5>
                                </style.Divider>

                                <style.Form onSubmit={onUpdateCompanyClick}>
                                    <style.Fieldset>
                                        <Cleave
                                            type="text"
                                            name="color"
                                            className="input"
                                            placeholder={"Theme color..."}
                                            value={color}
                                            onChange={handleChange}
                                            options={{
                                                uppercase: true
                                            }}
                                        />

                                        <Input
                                            type="text"
                                            name="message"
                                            placeholder="Message..."
                                            value={message}
                                            onChange={handleChange}
                                        />
                                    </style.Fieldset>

                                    <Button
                                        type="submit"
                                        onClick={onUpdateCompanyClick}
                                        theme="success"
                                        label="Save changes"
                                    />
                                </style.Form>
                            </Card>
                        </style.CardWrapper>

                        {company.length !== 0 && isAdmin &&
                            <Card space={true}>
                                <style.Divider>
                                    <h5 className="light">Invite teammates</h5>
                                </style.Divider>

                                <style.Form onSubmit={onSignupClick}>
                                    <style.Fieldset>
                                        <Label label="Email">
                                            <Input
                                                type="text"
                                                placeholder="Email..."
                                                name="email"
                                                value={email}
                                                onChange={handleChange}
                                            />
                                        </Label>

                                        <Label label="Username">
                                            <Input
                                                type="text"
                                                placeholder="Username..."
                                                name="username"
                                                value={username}
                                                onChange={handleChange}
                                            />
                                        </Label>

                                        <Label label="Password">
                                            <Input
                                                type="password"
                                                placeholder="Password..."
                                                name="password"
                                                value={password}
                                                onChange={handleChange}
                                            />
                                        </Label>

                                        <Label label="Roles">
                                            <Select
                                                name="role"
                                                onChange={handleChange}
                                                value={role}
                                                options={[
                                                    {
                                                        value: "admin",
                                                        label: "ADMIN"
                                                    },
                                                    {
                                                        value: "user",
                                                        label: "USER"
                                                    }
                                                ]}
                                            />
                                        </Label>
                                    </style.Fieldset>

                                    <Button onClick={onSignupClick} type="submit" label="Invite user" />
                                </style.Form>
                            </Card>}
                    </Column>
                </Container>
            </>
        );
    } return null;
};

export default User;