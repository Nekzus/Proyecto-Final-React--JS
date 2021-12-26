import React, { useState } from 'react'
import { useEffect } from 'react';
import { readOrdersDB } from '../../Firebase/functions';


const OrderListContainer = () => {
 const [orders, setOrders] = useState([]);

 useEffect  (() => {
    readOrdersDB('orders', setOrders);
        
    }, [setOrders]);

        


    console.log(orders);

    return (
        <div>
             {orders.map(order => (
                <div key={order.id}>
                    <h1>Orden Numero: {order.id}</h1>
                    <h1>Nombre Comprador: {order.buyer.name}</h1>
                    <h1>Correo Comprador: {order.buyer.email}</h1>
                    <h1>Telefono Comprador: {order.buyer.phone}</h1>
                    <h1>Monto Total: {order.total}</h1>
                    <h1>Fecha de Compra: {new Intl.DateTimeFormat('es-AR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(order.date.toDate())}</h1>
                    <h1>Detalle de la Orden:</h1>
                    {order.items.map(item => (
                        <div key={item.id}>
                            <h1>Nombre del Producto: {item.title}</h1>
                            <h1>Precio: $ {item.price_ticket}</h1>
                            <h1>Cantidad: {item.quantity}</h1>
                        </div>
                    ))}
                    <hr/>
                </div>
                
            ))}
        </div>
    )
};

export default OrderListContainer;
