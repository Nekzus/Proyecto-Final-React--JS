import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

const PrivateRoute = ({ children }) => {
  const { isLogged } = useUser("");
  const location = useLocation();

  localStorage.setItem('lastPath', location.pathname);

  return isLogged
    ? children
    : <Navigate to="/auth/login" />
};
export default PrivateRoute;
