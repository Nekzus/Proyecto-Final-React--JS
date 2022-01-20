import React from 'react';
import Header from './Header/Header'
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../Context/UserContext';

const App = () => {

    return (
        <BrowserRouter>
            <UserContext>
                <CartContext>
                    <Header />
                    <Main />
                    <Footer />
                    <ToastContainer
                        autoClose={8000}
                        className="toast-container"
                        toastClassName="dark-toast" />
                </CartContext>
            </UserContext>
        </BrowserRouter>
    )
};
export default App;
