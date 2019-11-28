import React from "react";

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
    password,
    email
}) => (
        <>
            <Toaster visible={error} close={removeErrorMessage} label="Please provide both an email and a password." theme="danger" />

            <style.FullColumn>
                <style.Content>
                    <style.Mark>bark</style.Mark>

                    <h4 className="semibold">Hey, welcome back <span role="img" aria-label="wave">👋</span></h4>
                    <p>Let's get back to it, just sign in below and we'll take you straight to your dashboard.</p>
                </style.Content>
            </style.FullColumn>

            <style.Container>
                <Card space={true}>
                    <form onSubmit={onLoginClick}>
                        <style.Fieldset>
                            <Input type="text" name="email" placeholder="Email..." value={email} onChange={handleChange} />
                            <Input type="password" name="password" placeholder="Password..." value={password} onChange={handleChange} />
                        </style.Fieldset>

                        <Button type="submit" theme="success" label="Login" onClick={onLoginClick} />
                    </form>
                </Card>
            </style.Container>
        </>
    );

export default Login;