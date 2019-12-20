import React from "react";
import { Icon } from "@blueprintjs/core";

import {
    Card,
    Toaster,
    Input,
    Button
} from "../../components";

import * as style from "./Login.style";

const Login = ({
    error,
    removeErrorMessage,
    onLoginClick,
    handleChange,
    username,
    password,
    email,
    showPassword,
    toggleShowPassword,
    onSignupClick,
    signup,
    toggleSignup,
    errorMessage,
    loading
}) => (
        <>
            <Toaster
                visible={error}
                close={removeErrorMessage}
                label={errorMessage}
                theme="danger"
            />

            <style.Page id="login">
                <style.Container>
                    <style.Form>
                        <style.Content>
                            {/* <style.Mark>bark</style.Mark> */}

                            <h4 className="semibold">Hey, welcome back <span role="img" aria-label="wave">👋</span></h4>
                            <p>Let's get back to it, just sign in below and we'll take you straight to your dashboard.</p>
                        </style.Content>

                        <style.Card>
                            <form onSubmit={signup ? onSignupClick : onLoginClick}>
                                <style.Fieldset>
                                    <Input
                                        type="text"
                                        name="email"
                                        placeholder="Email..."
                                        value={email}
                                        onChange={handleChange}
                                    />

                                    {signup &&
                                        <Input
                                            type="text"
                                            name="username"
                                            placeholder="Username..."
                                            value={username}
                                            onChange={handleChange}
                                        />}

                                    <style.Password>
                                        <Input
                                            type={!showPassword ? "password" : "text"}
                                            name="password"
                                            placeholder="Password..."
                                            value={password}
                                            onChange={handleChange}
                                        />
                                        <style.ShowPassword role="button" onClick={toggleShowPassword}>
                                            <Icon
                                                icon={!showPassword ? "eye-open" : "eye-off"}
                                                iconSize={16}
                                                title="show-password"
                                            />
                                        </style.ShowPassword>
                                    </style.Password>
                                </style.Fieldset>

                                <Button
                                    type="submit"
                                    theme="success"
                                    label={signup ? "Create new account" : "Login"}
                                    onClick={signup ? onSignupClick : onLoginClick}
                                />
                            </form>
                        </style.Card>

                        <style.Footer onClick={toggleSignup}>
                            <p>{signup ? "Already have an acccount? Login here" : "Not got an account? Create one here"}</p>
                            <Icon icon="arrow-right" iconSize={12} title="arrow" />
                        </style.Footer>
                    </style.Form>
                </style.Container>
            </style.Page>
        </>
    );

export default Login;