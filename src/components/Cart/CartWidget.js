import React, { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { BsCart4 } from 'react-icons/bs';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {

    const result = useContext(cartContext);
    const { quantity } = result;

    return (
        <span className='d-flex cart-widget'><BsCart4 />
            {(quantity > 0)
                ? <Badge pill bg='primary' className='cart-badge'>{quantity}</Badge>
                : <span>{''}</span>}
        </span>
    )
};
export default CartWidget;
