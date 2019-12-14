import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { checkIfAuthenticated } from "../../actions"
import { selectIsLoggedIn } from '../../selectors/authentication';

import Routes from "../../Routes";

const LoginWrap = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(checkIfAuthenticated());
  });

  // If we are not logged in we pass the login page
  return <Routes isLoggedIn={isLoggedIn} />;
};

export default LoginWrap;
