import React from "react";

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
    companyName,
    handleChange,
    onNewCompanyClick,
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
                                <Button theme="success" icon="small-tick" label="Done" onClick={saveOnClick} />
                            </style.Buttons>
                        </style.Header>

                        <style.CardWrapper>
                            <Card space={true}>
                                <style.UserHeader>
                                    <span>NAME</span>

                                    <span>ACCESS</span>
                                </style.UserHeader>

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
                            </Card>
                        </style.CardWrapper>

                        {company.length === 0 && isAdmin &&
                            <Card space={true}>
                                <h5 className="semibold">Connect your company</h5>
                                <p>You haven't connected your company yet.</p>

                                <style.Form onSubmit={onNewCompanyClick}>
                                    <Input
                                        type="text"
                                        name="companyName"
                                        onChange={handleChange}
                                        placeholder="Company name..."
                                        value={companyName}
                                    />
                                    <Button
                                        type="submit"
                                        icon={complete && "small-tick"}
                                        label={complete ? "Activated" : "Activate your company"}
                                        onClick={onNewCompanyClick}
                                    />
                                </style.Form>
                            </Card>}

                        {company.length !== 0 && isAdmin &&
                            <Card space={true}>
                                <style.Divider>
                                    <h5 className="semibold">Create users for your employees</h5>
                                    <p>Create users for your employees to login.</p>
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

                        <Button label="Logout" onClick={onLogoutCLick} />
                    </Column>
                </Container>
            </>
        );
    } return null;
};

export default User;