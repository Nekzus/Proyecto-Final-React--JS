/* eslint-disable react-hooks/exhaustive-deps */
import { serverTimestamp } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ModalCheckout from '../components/Modals/ModalCheckout';
import { createDataDB, updateDataDB } from '../Firebase/functions';
import { formatCurrency } from '../helpers/helpers';
import { useCheckStock } from '../hooks/useCheckStock';
import { useFetchItems } from '../hooks/useFetchItems';
import { useModal } from '../hooks/useModal';

export const context = createContext();
const { Provider } = context;

const CartContext = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [quantity, setQuantity] = useState(JSON.parse(localStorage.getItem('quantity')) || 0);
    const [handle, setHandle] = useState(true);
    const [isOpen, openModal, closeModal, orderRef, setOrderRef] = useModal(false);
    const [items] = useFetchItems();
    const [withStock, stockLow, stockOk] = useCheckStock(cart, items, handle);

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

    const removeItem = (item) => {
        const preCart = cart.filter(itemCart => itemCart.id !== item.id);
        setCart(preCart);
        setQuantity(quantity - item.quantity);
    };

    const clear = () => {
        setCart([]);
        setQuantity(0);
    };

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

    const handleCheckout = async () => {
        setHandle(true);
        const newOrder = {
            buyer: { name: 'Mauricio', phone: '123456789', email: 'maseortega@gmail.com' },
            items: cart,
            date: serverTimestamp(),
            status: 'Generada',
            total: total()
        }
        if (withStock) {
            if (stockOk.length > 0) {
                const dataOrder = await createDataDB('orders', newOrder);
                const idOrder = dataOrder.id;
                setOrderRef(idOrder);
                stockOk.forEach(item => {
                    const newStock = item.stock - item.quantity;
                    updateDataDB('movies', item.id, { stock: newStock });
                });
            }
            openModal();
            clear();
            setHandle(false);
        } else {
            if (stockLow.length > 0) {
                stockLow.forEach(item => {
                    const msg = (`Error: No hay stock suficiente para "${item.title}", solo queda/n ${item.stock} ticket/s disponible/s`);
                    toast.error(msg, { theme: "dark" });
                })
            }
        }
    };

    const valueContext = {
        cart,
        quantity,
        addItem,
        handleCheckout,
        clear,
        removeItem,
        setQuantity,
        total,
        isInCart,
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('quantity', JSON.stringify(quantity));
    }, [cart, quantity]);

    return (
        <div>
            <Provider value={valueContext}>
                <ModalCheckout docRef={orderRef} show={isOpen} close={closeModal} />
                {children}
            </Provider>
        </div>
    )
};
export default CartContext;