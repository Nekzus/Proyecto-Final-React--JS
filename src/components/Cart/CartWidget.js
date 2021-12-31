import React, { useContext } from 'react';
import { context } from '../../Context/CartContext';
import { BsCart4 } from 'react-icons/bs';
import { Badge } from 'react-bootstrap';
import { memo } from 'react';


const CartWidget = () => {

    const result = useContext(context);
    const { quantity } = result;

    return (
        <span className='d-flex cart-widget'><BsCart4 />
            {(quantity > 0)
                ? <Badge pill bg='primary' className='cart-badge'>{quantity}</Badge>
                : <span>{''}</span>}
        </span>
    )
};

export default memo(CartWidget);
