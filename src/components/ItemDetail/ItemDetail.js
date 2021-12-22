import React, { useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { context } from '../../Context/CartContext';
import ItemCategories from '../Common/ItemCategories';
import ItemCount from '../Common/ItemCount';
import PriceItems from '../Common/PriceItems';
import RatingStars from '../Common/RatingStars';

const ItemDetail = ({ item }) => {
    const result = useContext(context);

    const [{ overview, id, backdrop_path, vote_average, release_date, stock, title, price_ticket, genre_txt }] = item;
    const [quantity, setQuantity] = useState(1);
    const [quantityToAdd, setQuantityToAddquantity] = useState([]);
    const navigate = useNavigate();


    const handleOnAdd = () => {
        setQuantityToAddquantity(quantity);
        console.log(quantity);
        
        const item = {
            id,
            title,
            price_ticket,
            stock,
            quantity
        }
        
        result.addItem(item);
        setQuantity(0);
        console.log(`Agregaste el producto ${title} al carrito cantidad ${quantity} un.`);
    };

    const handleCart = () => {
        navigate(`/cart`);
    }
    const handleContinue = () => {  
        navigate(-1);
    }

    return (
        <Card className="container item-detail bg-dark">
            <div className="row" key={id} id={id}>
                <div className="col-md-6" id="productImage">
                    <div className="image">
                        <img src={backdrop_path} className="card-img-top p-2" alt={title} />
                    </div>
                </div>
                <div className="col-md-6 producto">
                    <div className="card bg-dark">
                        <Card.Body>
                            <Card.Title className='title-card text-center'>{title}</Card.Title>
                            <ItemCategories genre_txt={genre_txt} />
                            <Card.Text className='description-card'>{overview}</Card.Text>
                            <Card.Text className='releasedate-card'>Fecha de lanzamiento: {release_date}</Card.Text>
                            <Card.Text className='rating-card'>Valoración: <RatingStars rating={vote_average} /></Card.Text>
                            <Card.Text className='stock-card'>Tickets disponibles: {stock} un.</Card.Text>
                            <Card.Text className='price-card'>Valor ticket: <PriceItems value={price_ticket} /></Card.Text>
                        </Card.Body>
                        <Card.Footer className='card-footer'>
                            {(quantityToAdd > 0)
                                ? <div className='selector-cantidad d-flex col-auto'>
                                    <button className="btn btn-continue btn-secondary" onClick={handleContinue}>Continuar comprando</button>
                                    <button className="btn btn-cart btn-secondary" onClick={handleCart}>Comprar</button>
                                </div>
                                : <ItemCount className='item-count' stock={stock} onAdd={handleOnAdd} count={quantity} setCount={setQuantity} />
                            }
                        </Card.Footer>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ItemDetail;
