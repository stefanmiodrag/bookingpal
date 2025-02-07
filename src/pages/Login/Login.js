import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@blueprintjs/core";

import {
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
    password,
    email,
    showPassword,
    toggleShowPassword,
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
                            <h4 className="semibold">Hey, welcome back <span role="img" aria-label="wave">👋</span></h4>
                            <p>Let's get back to it, just sign in below and we'll take you straight to your dashboard.</p>
                        </style.Content>

                        <style.Card>
                            <form onSubmit={onLoginClick}>
                                <style.Fieldset>
                                    <Input
                                        type="text"
                                        name="email"
                                        placeholder="Email..."
                                        value={email}
                                        onChange={handleChange}
                                    />

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
                                    label="Login"
                                    onClick={onLoginClick}
                                />
                            </form>
                        </style.Card>

                        <style.Footer>
                            <Link to="/auth/signup">Not got an account? Create one.</Link>
                        </style.Footer>
                    </style.Form>
                </style.Container>
            </style.Page>
        </>
    );

export default Login;