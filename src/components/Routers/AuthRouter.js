import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginUser from '../Auth/LoginUser';
import RegisterUser from '../Auth/RegisterUser';
import NotFound from '../NotFound/NotFound';

const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Routes>
                    <Route path="login" element={<LoginUser />} />
                    <Route path="register" element={<RegisterUser />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
};
export default AuthRouter;
