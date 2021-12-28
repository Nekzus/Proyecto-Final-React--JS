/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { CardGroup } from 'react-bootstrap';
import Loading from '../Common/Loading';
import { searchItemDB } from '../../Firebase/functions';

const ItemDetailContainer = () => {
    const [message, setMessage] = useState([]);
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const abortController = new AbortController();
        searchItemDB('movies', id, setItem);
        (item.length !== 0) ? setMessage() : setMessage(<Loading />);
        return () => {
            abortController.abort();
            console.log('cleanup itemdetailcontainer');
        }
    }, [id, setItem]);

    if (item.length !== 0) {
        return (
            <CardGroup className='card-group'>
                <div className='container'>
                    <ItemDetail item={item} />
                </div>
            </CardGroup>
        )
    } else {
        return (
            <div>
                <div className='container text-center'>{message}</div>
            </div>
        )
    }
};

export default ItemDetailContainer;
