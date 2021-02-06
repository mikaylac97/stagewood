import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Implement protected route

const ProtectedRoute = ({ authorized, redirect, ...props }) => {
  if (authorized) {
    return <Route {...props} />;
  } else {
    return <Redirect to={redirect} />;
  }
};

export default ProtectedRoute;