import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { checkIfAuthenticated } from "../../actions"
import { selectIsLoggedIn, selectIsAppLoading } from '../../selectors';

import Routes from "../../Routes";

import * as style from "./LoginWrap.style";

const LoginWrap = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsAppLoading);

  useEffect(() => {
    dispatch(checkIfAuthenticated());
  }, [dispatch]);

  if (isLoading) {
    return (
      <style.Loading id="loading">
        <style.Container>
          <style.Spinner />
          <span>Getting everything ready...</span>
        </style.Container>
      </style.Loading>
    );
  }

  // Pass isLoggedIn flag to routes
  return <Routes isLoggedIn={isLoggedIn} />;
};

export default LoginWrap;
