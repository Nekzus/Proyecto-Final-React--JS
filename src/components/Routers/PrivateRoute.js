import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

const PrivateRoute = ({ children }) => {
  const { isLogged } = useUser("");
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('lastPath', location.pathname);
  }, [location]);

  return isLogged
    ? children
    : <Navigate to="/auth/login" />
};
export default PrivateRoute;
