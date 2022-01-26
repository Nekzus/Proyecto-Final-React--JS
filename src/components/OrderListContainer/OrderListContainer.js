import React from 'react'
import { Card, Image } from 'react-bootstrap';
import { convertDateString, formatCurrency } from '../../helpers/helpers';
import { useFetchOrders } from '../../hooks/useFetchOrders';
import { useUser } from '../../hooks/useUser';
import Loading from '../Common/Loading';
import MessageEmptyOrder from '../Common/MessageEmptyOrder';

const OrderListContainer = () => {
    const [orders, loading] = useFetchOrders();
    const { user } = useUser("");

    return (
        <>
            {loading
                ? <div>
                    <div className='container text-center'>{<Loading />}</div>
                </div>
                : (orders.length === 0)
                    ? <MessageEmptyOrder />
                    : orders.map(order => (
                        (order.buyer.email === user.email) &&
                        <div className="container p-2" key={order.id}>
                            <Card>
                                <Card.Header>
                                    <span className='header-order'>
                                        <span>{convertDateString(order.date)}</span>
                                        <span>{order.buyer.email}</span>
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
};
export default OrderListContainer;
