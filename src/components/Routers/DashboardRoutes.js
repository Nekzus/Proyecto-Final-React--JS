import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../Cart/Cart';
import NotFound from '../NotFound/NotFound';
import OrderListContainer from '../OrderListContainer/OrderListContainer';

const DashboardRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="cart" element={<Cart />} />;
                <Route path="orders" element={<OrderListContainer />} />;
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
};
export default DashboardRoutes;
