import React from 'react'
import { Alert } from 'react-bootstrap';

const MessageEmptySearch = ({q}) => {
    return (
        <div className="container-flex cart-container">
            <Alert variant='dark' className='text-center'>
                <Alert.Heading >Busqueda sin resultados</Alert.Heading>
                <p>
                    No se encontraron resultados para "{q}".
                </p>
            </Alert>
        </div>
    )
};
export default MessageEmptySearch;