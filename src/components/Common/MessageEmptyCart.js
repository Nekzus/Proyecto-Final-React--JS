import React, { memo } from 'react'
import { Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MessageEmptyCart = ({ handleCatalog }) => {
    return (
        <div className="container-flex cart-container">
            <Alert variant='dark' className='text-center'>
                <Alert.Heading >Tu carrito esta vacío</Alert.Heading>
                <p>
                    Comienza agregando productos.
                </p>
                <hr />
                <p className="mb-0">
                    <NavLink to={`/`}><button className="btn btn-dark" onClick={handleCatalog}>Volver al catalogo</button></NavLink>
                </p>
            </Alert>
        </div>
    )
};

export default memo(MessageEmptyCart);
