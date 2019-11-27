import React from "react";

const Login = ({
    onLoginClick,
    handleChange,
    password,
    email
}) => (
        <div>
            Login

        <form onSubmit={onLoginClick}>
                <input type="text" name="email" placeholder="email" value={email} onChange={handleChange} />
                <input type="password" name="password" placeholder="password" value={password} onChange={handleChange} />

                <button type="submit" onClick={onLoginClick}>LOGIN</button>
            </form>
        </div>
    );

export default Login;