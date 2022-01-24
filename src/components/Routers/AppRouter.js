import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import OrderListContainer from '../OrderListContainer/OrderListContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
import AuthRouter from './AuthRouter';

export const AppRouter = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />;
                <Route path="/categoria/:id" element={<ItemListContainer />} />;
                <Route path="/item/:id" element={<ItemDetailContainer />} />;
                <Route path="/cart" element={<Cart />} />;
                <Route path="/orders" element={<OrderListContainer />} />;
                <Route path="/search" element={<SearchContainer />} />;
                <Route path="/auth/*" element={<AuthRouter />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
};
export default AppRouter;
