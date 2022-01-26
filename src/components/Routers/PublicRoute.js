import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

const PublicRoute = ({ children }) => {
    const { isLogged } = useUser("");
    const lastPath = localStorage.getItem('lastPath') || '/';

    return isLogged
        ? <Navigate to={lastPath} />
        : children
};
export default PublicRoute;