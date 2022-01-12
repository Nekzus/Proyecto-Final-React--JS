/* eslint-disable react-hooks/exhaustive-deps */
// import { serverTimestamp } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import ModalCheckout from '../components/Modals/ModalCheckout';
// import { createDataDB } from '../Firebase/functions';
// import { createDataDB, updateDataDB } from '../Firebase/functions';
import { formatCurrency } from '../helpers/helpers';
import { useCheckStock } from '../hooks/useCheckStock';
import { useFetchItems } from '../hooks/useFetchItems';
import { useModal } from '../hooks/useModal';

export const context = createContext();
const { Provider } = context;

const CartContext = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    // const [withStock, setWithStock] = useState(false)
    const [quantity, setQuantity] = useState(JSON.parse(localStorage.getItem('quantity')) || 0);
    const [handle, setHandle] = useState(true);
    const [isOpen, openModal, closeModal, orderRef, setOrderRef] = useModal(false);
    const [items] = useFetchItems();
    const [withStock, stockLow, stockOk] = useCheckStock(cart, items, handle);



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
    const handleCheckout = () => {
        setHandle(true);
        // const newOrder = {
        //     buyer: { name: 'Mauricio', phone: '123456789', email: 'maseortega@gmail.com' },
        //     items: cart,
        //     date: serverTimestamp(),
        //     status: 'Generada',
        //     total: total()
        // }



        // items.forEach(item => {
        //     cart.forEach(product => {
        //         if (item.id === product.id) {
        //             console.log('withStock antes', withStock);
        //             if (item.stock >= product.quantity) {
        //                 setWithStock(true);
        //                 console.log('Hay stock disponible');
        //                 console.log('withStock disponible', withStock);
        //                 // const newStock = item.stock - product.quantity;
        //                 // updateDataDB('movies', product.id, { stock: newStock });
        //             } else {
        //                 setWithStock(false);
        //                 console.log('No hay stock disponible');
        //                 console.log('withStock disponible', withStock);
        //                 alert(`No hay stock suficiente para ${product.title}, solo queda/n ${item.stock} ticket/s disponible/s`);
        //             }
        //         }
        //     })
        // });


        if (withStock) {
            console.log('ORDEN GENERADA');
            console.log('withStock disponible OG', withStock);
            // const dataOrder = createDataDB('orders', newOrder);
            // const idOrder = dataOrder.id;
            // setOrderRef(idOrder);
            // console.log('productTitle', productTitle);

            // const newStock = itemStock - productQuantity;
            // console.log('newStock:', newStock);
            // updateDataDB('movies', product.id, { stock: newStock });
            // openModal();
            // // //**VACIAR CARRITO */
            // clear();
            setHandle(false);
        } else {
            if (stockLow.length > 0) {
                console.log('ORDEN NO GENERADA: No hay stock suficiente para comprar');
                stockLow.forEach(item => {
                    alert(`No hay stock suficiente para ${item.title}, solo queda/n ${item.stock} ticket/s disponible/s`);
                })
                console.log('withStock disponible ONG', withStock);
            }
        }
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
                <ModalCheckout docRef={orderRef} show={isOpen} close={closeModal} />
                {children}
            </Provider>
        </div>
    )
};
export default CartContext;