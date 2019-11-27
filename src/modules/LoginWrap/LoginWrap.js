import React, { useEffect } from 'react';
import { Login } from '../../pages';

const LoginWrap = ({ children }) => {
  useEffect(() => {
    // checkIfAuthenticated
  }, []);

  // If we are logged in we just pass the children
  // if (isLoggedIn) {
  //   return children;
  // }

  // If we are not logged in we pass the login page
  return <Login />;
};

export default LoginWrap;
