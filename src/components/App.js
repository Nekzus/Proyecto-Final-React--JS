import React from 'react';
import Header from './Header/Header'
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import CartContext  from '../Context/CartContext';

const App = () => {
console.log('Render App');
    return (
        <BrowserRouter>
            <CartContext>
                <Header />
                <Main />
                <Footer />
            </CartContext>
        </BrowserRouter>
    )
};

export default App;
