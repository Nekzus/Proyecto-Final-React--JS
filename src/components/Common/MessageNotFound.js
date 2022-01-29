import React from 'react'
import { Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MessageNotFound = () => {
    return (
        <div className="container cart-container">
            <Alert variant='dark' className='text-center'>
                <Alert.Heading >Página no encontrada</Alert.Heading>
                <p>
                    Opps !!! Lo sentimos, la página a la que estas intentando acceder no existe
                </p>
                <hr />
                <p className="mb-0">
                    <NavLink to={`/`}><button className="btn btn-dark">Volver al inicio</button></NavLink>
                </p>
            </Alert>
        </div>
    )
};
export default MessageNotFound;