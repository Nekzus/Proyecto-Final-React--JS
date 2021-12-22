import React, { useContext } from 'react';
import { context } from '../../Context/CartContext';
import { BsCart4 } from 'react-icons/bs';

const CartWidget = () => {

    const result = useContext(context);
    const{quantity}=result;

    return (
        <>
        <h6>{quantity}</h6>
        <span className='cart-widget'><BsCart4 /></span>
        </>
    )
}

export default CartWidget
