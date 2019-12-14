import React from "react";

import {
    Tag,
    Card,
    Toaster,
    Input,
    Label,
    Select,
    Button
} from "../../components";

import * as style from "./Settings.style";

const User = ({
    user,
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
        return (
            <>
                <Toaster
                    visible={error}
                    close={removeErrorMessage}
                    label={errorMessage}
                    theme="danger"
                />

                <style.SmallColumn>
                    <h3 className="semibold">Manage {company.length !== 0 ? company[0].name : "your profile"}</h3>
                    <p>Save your BookingPal settings here. </p>

                    <style.CardWrapper>
                        <Card space={true}>
                            <style.Divider>
                                <h5 className="semibold">Users</h5>
                                <p>An overview of all the users that have access to this company.
                                    You are the owner of this workspace, and only you can add, edit &amp; delete the users beneath.</p>
                            </style.Divider>

                            <style.Users>
                                <p>{user.username} ({user.email})</p>
                                <style.Tags>
                                    <Tag label="YOU" />
                                    <Tag label={user.role.toUpperCase()} />
                                </style.Tags>
                            </style.Users>
                        </Card>
                    </style.CardWrapper>

                    {company.length === 0 &&
                        <Card bar={true} space={true}>
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

                    {company.length !== 0 && user.role.toUpperCase() === "ADMIN" &&
                        <Card bar={true} space={true}>
                            <style.Divider>
                                <h5 className="semibold">Create users your employees</h5>
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
                </style.SmallColumn>

                <style.SmallColumn>
                    <style.Buttons>
                        <Button label="Logout" onClick={onLogoutCLick} />
                        <Button theme="success" label="Save changes" onClick={saveOnClick} />
                    </style.Buttons>
                </style.SmallColumn>
            </>
        );
    } return null;
};

export default User;