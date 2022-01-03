import React from 'react'
import { Alert } from 'react-bootstrap';

const MessageEmptyOrder = () => {
    return (
        <div className="container-flex cart-container">
            <Alert variant='dark' className='text-center'>
                <Alert.Heading >No tienes ordenes generadas</Alert.Heading>
                <p>
                    Comienza a operar con tu carrito.
                </p>
            </Alert>
        </div>
    )
};
export default MessageEmptyOrder;
