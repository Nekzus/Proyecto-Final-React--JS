import React, { useContext } from 'react'
import { Image, Table } from 'react-bootstrap';
import { cartContext } from '../../Context/CartContext';
import { IoTrashOutline } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';
import { BsCartCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { formatCurrency } from '../../helpers/helpers';
import MessageEmptyCart from '../Common/MessageEmptyCart';

const Cart = () => {
    const result = useContext(cartContext);
    const { cart, clear, removeItem, total, handleCheckout } = result;
    const navigate = useNavigate();

    return (
        <>
            {cart.length !== 0 &&
                <div className="container cart-container">
                    <Table responsive="sm" striped bordered hover variant="dark" className='table-cart'>
                        <thead>
                            <tr>
                                <th scope="col">Portada</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Tickets</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id} className="td-table">
                                        <td><Image src={item.poster_path} width="80rem" rounded className='img-fluid' /></td>
                                        <td>{item.title}</td>
                                        <td>{formatCurrency(item.price_ticket)}</td>
                                        <td>{item.quantity}</td>
                                        <td>{formatCurrency(item.price_ticket * item.quantity)}</td>
                                        <td><button className='btn btn-default btn-borrar' onClick={() => removeItem(item)}><span className='trash-icon'><IoTrashOutline /></span></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>

                    <div className='container'>
                        <div className="d-flex justify-content-center">
                            <p className="total-amount h4">Total = <span id="total-amount">{total()}</span></p>
                        </div>
                        <div className="row text-center">
                            <div className="col">
                                <button className="btn btn-cart-return btn-dark mt-3 mb-3" onClick={() => { navigate(-1) }}><HiArrowLeft /> Volver</button>
                            </div>
                            <div className="col">
                                <button className="btn btn-cart-clear btn-dark mt-3 mb-3" onClick={() => clear()}><FaTrashAlt /> Vaciar carrito</button>
                            </div>
                            <div className="col">
                                <button className="btn btn-cart-check btn-dark mt-3 mb-3" onClick={handleCheckout}><BsCartCheckFill /> Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>}
            {cart.length === 0 && <MessageEmptyCart />}
        </>
    )
};
export default Cart;
