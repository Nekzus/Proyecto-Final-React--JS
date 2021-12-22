import React, { createContext, useState } from 'react';

export const context = createContext();
const { Provider } = context;


const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    console.log('Carrito:',cart,'Cantidad:',quantity);

    const addItem = (item, quantity) => {
        isInCart(item)
        ? updateItem(item, quantity)
        : setCart([...cart, { item, quantity }]);
        setQuantity(quantity);
    };


    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
        setQuantity(0);
    };


    const isInCart = (itemId) => {
        return cart.find(item => item.id === itemId);
    };

    const updateItem = (item, quantity) => {
        setCart(cart.map(product=> product.id === item.id ? { ...item, quantity } : item));
    };


        const valueContext = {
            cart,
            quantity,
            addItem,
            removeItem,
            clearCart,
        };

        return (
            <div>
                <Provider value={valueContext}>
                    {children}
                </Provider>

            </div>
        )
    };

    export default CartContext;