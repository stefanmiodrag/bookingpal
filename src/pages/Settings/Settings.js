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
    color,
    message,
    handleChange,
    onUpdateCompanyClick,
    company,
    removeSuccessMessage,
    complete,
    errorMessage,
    error,
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

                <Toaster
                    visible={complete}
                    close={removeSuccessMessage}
                    label="Successfully saved the changes"
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
                                <Button icon="cog" theme="primary"></Button>
                                <Button label="Logout" theme="primary" onClick={onLogoutCLick} />
                            </style.Buttons>
                        </style.Header>

                        <style.CardWrapper>
                            <Card space={true}>
                                <style.Divider>
                                    <h5>Availability</h5>
                                </style.Divider>
                            </Card>
                        </style.CardWrapper>

                        <style.CardWrapper>
                            <Card space={true}>
                                <style.Divider>
                                    <h5>Customize</h5>
                                </style.Divider>

                                <style.Form onSubmit={onUpdateCompanyClick}>
                                    <style.Fieldset>
                                        <Label label="Welcome Message">
                                            <Input
                                                type="text"
                                                name="message"
                                                placeholder="Message..."
                                                value={message}
                                                onChange={handleChange}
                                            />
                                        </Label>

                                        <Label label="Accent color">
                                            <Cleave
                                                type="text"
                                                name="color"
                                                className="input"
                                                placeholder={"Accent color..."}
                                                value={color}
                                                onChange={handleChange}
                                                options={{
                                                    uppercase: true
                                                }}
                                            />
                                        </Label>
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
                    </Column>
                </Container>
            </>
        );
    } return null;
};

export default User;