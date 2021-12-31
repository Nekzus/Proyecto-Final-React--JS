/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Card, Image } from 'react-bootstrap';
import { readOrdersDB } from '../../Firebase/functions';
import { convertDateString, formatCurrency } from '../../helpers/helpers';
import Loading from '../Common/Loading';
import MessageEmptyOrder from '../Common/MessageEmptyOrder';

const OrderListContainer = () => {
    const [message, setMessage] = useState(<Loading />);
    const [orders, setOrders] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        console.log('Render orderlistcontainer'); //TODO: remove
    })
    


    
    useEffect(() => {
        setIsMounted(true);
        isMounted && readOrdersDB('orders', setOrders);
        return () => {
            setIsMounted(false);
            console.log('cleanup orderlistcontainer'); //TODO: remove
        }
    }, [setOrders, isMounted]);
    
    useEffect(() => {
        (orders.length !== 0) ? setMessage('')
            : setTimeout(() => {
                if (orders.length !== 0) {
                    return setMessage('');
                } else {
                    return setMessage(<MessageEmptyOrder />);
                }
            }, 2000);
        return () => {
            console.log('cleanup orderlistcontainer msg'); //TODO: remove
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
                                            <Image src={item.poster_path} width="90rem" rounded className='img-fluid' />
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
                                <span className='total-order col-auto'>Valor orden: <span className='total-amount-order'>{order.total}</span></span>
                                {order.status === 'Generada' ? <span className='status-order col-auto'>Estado: <span className='status-buy-pending'>{order.status}</span></span> : <span className='status-order col-auto'>Estado: <span className='status-buy-ok'>{order.status}</span></span>}
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
