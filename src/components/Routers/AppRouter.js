import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginUser from '../Auth/LoginUser';
import RegisterUser from '../Auth/RegisterUser';
import Cart from '../Cart/Cart';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import OrderListContainer from '../OrderListContainer/OrderListContainer';


export const AppRouter = () => {

    useEffect(() => {
        console.log('Render approuter'); //TODO: remove
    })
    return (
        <div>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />;
                <Route path="/categoria/:id" element={<ItemListContainer />} />;
                <Route path="/item/:id" element={<ItemDetailContainer />} />;
                <Route path="/cart" element={<Cart />} />;
                <Route path="/orders" element={<OrderListContainer />} />;
                <Route path="/auth/login" element={<LoginUser />} />
                <Route path="/auth/register" element={<RegisterUser />} />
                <Route path="*" element={<Navigate to='/' />} />;
            </Routes>
        </div>
    )
};

export default AppRouter;
