import React, { useContext } from 'react'
import { Badge } from 'react-bootstrap';
import { BsCartPlusFill } from 'react-icons/bs';
import { context } from '../../Context/CartContext';

const ItemStatus = ({ itemId, stock }) => {
    const result = useContext(context);
    const { isInCart } = result;

    if (isInCart(itemId)) {
        return (<Badge className='product-in-cart' bg="dark">EN TU CARRITO<BsCartPlusFill /></Badge>);
    } else if (stock <= 0) {
        return (<Badge className='product-in-cart' bg="danger">AGOTADO</Badge>);
    } else if (stock > 1 && stock <= 10) {
        return (<Badge className='product-in-cart' bg="warning">ÚLTIMOS {stock} TICKETS</Badge>);
    } else if (stock === 1) {
        return (<Badge className='product-in-cart' bg="warning">ÚLTIMO TICKET</Badge>);
    } else if (stock > 10) {
        return (<Badge className='product-in-cart' bg="success">TICKETS DISPONIBLES</Badge>);
    } else {
        return <></>
    }
};

export default ItemStatus;
