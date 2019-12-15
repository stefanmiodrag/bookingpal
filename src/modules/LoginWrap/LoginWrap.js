import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { checkIfAuthenticated } from "../../actions"
import { selectIsLoggedIn, selectIsAppLoading } from '../../selectors';

import Routes from "../../Routes";

const LoginWrap = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsAppLoading);

  useEffect(() => {
    dispatch(checkIfAuthenticated());
  }, [dispatch]);

  console.log(isLoading)

  if (isLoading) {
    return (
      <div id="page">
        LOADING...
      </div>
    );
  }

  // If we are not logged in we pass the login page
  return <Routes isLoggedIn={isLoggedIn} />;
};

export default LoginWrap;
