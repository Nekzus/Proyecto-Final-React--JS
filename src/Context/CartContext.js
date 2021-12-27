import { serverTimestamp } from 'firebase/firestore';
import React, { createContext, useState } from 'react';
import { createDataDB, updateDataDB } from '../Firebase/functions';
import { formatCurrency } from '../helpers/helpers';

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
            // saveData();
        } else {
            setCart([...cart, item]);
            // saveData();
        }
        setQuantity(quantity + item.quantity);
    };

    //**ELIMINAR ITEM DEL CARRITO */
    const removeItem = (item) => {
        const preCart = cart.filter(itemCart => itemCart.id !== item.id);
        setCart(preCart);
        setQuantity(quantity - item.quantity);
        // saveData();
    };

    //**VACIAR CARRITO */
    const clear = () => {
        setCart([]);
        setQuantity(0);
        // saveData();
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

    const handleCheckout = () => {
        const newOrder = {
            buyer: {name: 'Mauricio',phone: '123456789',email: 'maseortega@gmail.com'},
            items: cart,
            date: serverTimestamp(),
            status: 'Pendiente',
            total: total()
        }
        createDataDB('orders', newOrder);
        console.log('carga base de datos exitosa');
      cart.forEach(item => {
        updateDataDB('movies', item.id, {stock: item.stock - item.quantity});
        });
        console.log('actualizacion base de datos exitosa');
        clear();
    };


    // const saveData = () => {
    //     localStorage.setItem('cart', JSON.stringify(cart));
    // };


    const valueContext = {
        cart,
        quantity,
        addItem,
        handleCheckout,
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