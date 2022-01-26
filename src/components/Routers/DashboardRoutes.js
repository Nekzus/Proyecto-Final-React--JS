import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderListContainer from '../OrderListContainer/OrderListContainer';

const DashboardRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/cart" element={<Cart />} />;
                <Route path="/orders" element={<OrderListContainer />} />;
            </Routes>
        </div>
    )
};
export default DashboardRoutes;
