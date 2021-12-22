import React, { createContext, useState } from 'react';

export const context = createContext();
const { Provider } = context;


const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);


    console.log('Carrito:', cart, 'Cantidad:', quantity);

    //**AGREGAR ITEM AL CARRITO */
    const addItem = (item) => {
        if (isInCart(item.id)) {
            const preCart = cart.map(itemCart => {
                if (itemCart.id === item.id) {
                    return { ...itemCart, quantity: itemCart.quantity + item.quantity }
                } else {
                    return itemCart;
                }
            });
            setCart(preCart);
        } else {
            setCart([...cart, item]);
        }
        setQuantity(quantity + item.quantity);
    };

    //**ELIMINAR ITEM DEL CARRITO */
    const removeItem = (item) => {
        const preCart = cart.filter(itemCart => itemCart.id !== item.id);
        setCart(preCart);
        setQuantity(quantity - item.quantity);
    };

    //**VACIAR CARRITO */
    const clear = () => {
        setCart([]);
        setQuantity(0);
    };

    //**VERIFICAR EXISTENCIA DE ITEM EN CARRITO */
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    const valueContext = {
        cart,
        quantity,
        addItem,
        clear,
        removeItem,
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