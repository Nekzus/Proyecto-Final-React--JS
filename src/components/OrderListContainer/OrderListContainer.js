import React, { useState } from 'react'
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { readOrdersDB } from '../../Firebase/functions';
import { convertDateString, formatCurrency } from '../../helpers/helpers';
import Loading from '../Common/Loading';

const OrderListContainer = () => {
    const [message, setMessage] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            readOrdersDB('orders', setOrders);
        }
        if (orders.length !== 0) {
            setMessage()
        } else {
            setMessage(<Loading />)
        }
        return () => {
            mounted = false;
        }

    }, [orders]);

    if (orders.length !== 0) {
        return (
            <>
                {orders.map(order => (
                    <div className="container p-2" key={order.id}>
                        <Card>
                            <Card.Header>
                                <span className='header-order'>
                                    <span>{convertDateString(order.date)}</span>
                                    <span># {order.id}</span>
                                </span>
                            </Card.Header>
                            {order.items.map(item => (
                                <Card.Body key={item.id}>
                                    <div className='row'>
                                        <hr />
                                        <div className='col-auto'>
                                            <Card.Img variant='left' src={item.poster_path} width="90rem"></Card.Img>
                                        </div>
                                        <div className='col-auto'>
                                            <Card.Text>Pelicula: {item.title}</Card.Text>
                                            <Card.Text>Tickets: {item.quantity}</Card.Text>
                                            <Card.Text>Precio: {formatCurrency(item.price_ticket)}</Card.Text>
                                            <Card.Text>Subtotal: {formatCurrency(item.price_ticket * item.quantity)}</Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            ))}
                            <hr />
                            <div className='footer-order'>
                                <span className='total-order col-auto'>Valor orden: <span className='total-amount'>{order.total}</span></span>
                                {order.status === 'Pendiente' ? <span className='status-order col-auto'>Estado: <span className='status-buy-pending'>{order.status}</span></span> : <span className='status-order col-auto'>Estado: <span className='status-buy-ok'>{order.status}</span></span>}
                            </div>
                        </Card>
                    </div>
                ))}
            </>
        )
    } else {
        return (
            <div>
                <div className='container text-center'>{message}</div>
            </div>
        )
    }
};

export default OrderListContainer;
