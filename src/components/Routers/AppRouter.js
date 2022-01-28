import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
import AuthRouter from './AuthRouter';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

    return (
        <div>
            <Routes>
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                }
                />
                <Route path="/auth/*" element={
                    <PublicRoute>
                        <AuthRouter />
                    </PublicRoute>
                }
                />
                <Route path="/" element={<ItemListContainer />} />;
                <Route path="/categoria/:id" element={<ItemListContainer />} />;
                <Route path="/item/:id" element={<ItemDetailContainer />} />;
                <Route path="/search" element={<SearchContainer />} />;
                <Route path="/categoria" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
};
export default AppRouter;
