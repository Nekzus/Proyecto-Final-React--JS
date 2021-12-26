import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ItemDetailcontainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import OrderListContainer from '../OrderListContainer/OrderListContainer';


export const AppRouter = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<ItemListContainer />} />;
                <Route path="/categoria/:id" element={<ItemListContainer />} />;
                <Route path="/item/:id" element={<ItemDetailcontainer />} />;
                <Route path="/cart" element={<Cart />} />;
                <Route path="/order" element={<OrderListContainer />} />;
                <Route path="*" element={<Navigate to='/' />} />;
            </Routes>
        </div>
    )
};

export default AppRouter;
