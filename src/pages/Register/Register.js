import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@blueprintjs/core";

import {
    Input,
    Button
} from "../../components";

import * as style from "./Register.style";

const Register = ({
    handleChange,
    username,
    company,
    password,
    email,
    showPassword,
    toggleShowPassword,
    onSignupClick,
}) => (
        <>
            <style.Page id="register">
                <style.Container>
                    <style.Form>
                        <style.Content>
                            <h4 className="semibold">Hey, we've been expecting you <span role="img" aria-label="wave">👋</span></h4>
                            <p>Let's get started, just sign up below and we'll take you straight to your dashboard.</p>
                        </style.Content>

                        <style.Card>
                            <form onSubmit={onSignupClick}>
                                <style.Fieldset>
                                    <Input
                                        type="text"
                                        name="email"
                                        placeholder="Email..."
                                        value={email}
                                        onChange={handleChange}
                                    />

                                    <Input
                                        type="text"
                                        name="company"
                                        placeholder="Business name..."
                                        value={company}
                                        onChange={handleChange}
                                    />

                                    <Input
                                        type="text"
                                        name="username"
                                        placeholder="Username..."
                                        value={username}
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
                                    label={"Create new account"}
                                    onClick={onSignupClick}
                                />
                            </form>
                        </style.Card>

                        <style.Footer>
                            <Link to="/auth/login">Already have an acccount? Login here</Link>
                        </style.Footer>
                    </style.Form>
                </style.Container>
            </style.Page>
        </>
    );

export default Register;