import React from 'react';
import Header from './Header/Header'
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    return (
        <BrowserRouter>
            <CartContext>
                <Header />
                <Main />
                <Footer />
                <ToastContainer 
                autoClose={8000}
                className="toast-container"
                toastClassName="dark-toast"/>
            </CartContext>
        </BrowserRouter>
    )
};
export default App;
