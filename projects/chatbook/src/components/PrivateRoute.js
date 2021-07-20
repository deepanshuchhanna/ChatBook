/* eslint-disable import/no-unresolved */
import React from 'react';
import { Redirect, Route } from 'react-router';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = useProfile();

  if (!profile) {
    return <Redirect to="/signIn" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
