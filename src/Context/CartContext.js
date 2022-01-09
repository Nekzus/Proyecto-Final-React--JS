import { serverTimestamp } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import ModalCheckout from '../components/Modals/ModalCheckout';
import { createDataDB, updateDataDB } from '../Firebase/functions';
import { formatCurrency } from '../helpers/helpers';
import { useModal } from '../hooks/useModal';

export const context = createContext();
const { Provider } = context;

const CartContext = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [quantity, setQuantity] = useState(JSON.parse(localStorage.getItem('quantity')) || 0);
    const [isOpen, openModal, closeModal, data, setData] = useModal(false);

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

    //**CALCULAR VALOR TOTAL ORDEN */
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

    //**CREAR Y GUARDAR EN FIRESTORE NUEVA ORDEN */
    const handleCheckout = async () => {
        const newOrder = {
            buyer: { name: 'Mauricio', phone: '123456789', email: 'maseortega@gmail.com' },
            items: cart,
            date: serverTimestamp(),
            status: 'Generada',
            total: total()
        }
        //**GUARDAR Y OBTENER ID DE ORDEN GENERADA */
        const dataOrder = await createDataDB('orders', newOrder);
        const idOrder = dataOrder.id;
        setData(idOrder);
        openModal();
        
        //**ACTUALIZAR STOCK EN DB */
        cart.forEach(item => {
            updateDataDB('movies', item.id, { stock: item.stock - item.quantity });
        });
        //**VACIAR CARRITO */
        clear();
    };

    //**ENVIAR POR CONTEXTO FUNCIONES Y VARIABLES */
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

    //**GUARDAR CARRITO Y CANTIDAD EN LOCALSTORAGE */
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('quantity', JSON.stringify(quantity));
    }, [cart, quantity]);

    return (
        <div>
            <Provider value={valueContext}>
                <ModalCheckout docRef={data} show={isOpen} close={closeModal} />
                {children}
            </Provider>
        </div>
    )
};
export default CartContext;