import React, { createContext, useState } from 'react';
import { formatCurrency } from '../components/Common/PriceItems';

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

    const total = () => {
        let total = 0;
        if (cart.length !== 0) {
            cart.forEach(item => {
                total += item.price_ticket * item.quantity;
            })
            total = formatCurrency(total);
            return total;
        };
    };

    const valueContext = {
        cart,
        quantity,
        addItem,
        clear,
        removeItem,
        setQuantity,
        total,
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