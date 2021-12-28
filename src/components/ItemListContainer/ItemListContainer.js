/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { filterDataDB, readDataDB } from '../../Firebase/functions';
import { useParams } from 'react-router-dom';
import NavContainer from '../NavContainer/NavContainer';
import Loading from '../Common/Loading';

const ItemListContainer = () => {
    const [message, setMessage] = useState([]);
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const abortController = new AbortController();
        (!id)
            ? readDataDB('movies', setItems, 'vote_average', 'desc')
            : filterDataDB('movies', 'genre_ids', id, setItems);
        return () => {
            abortController.abort();
            console.log('cleanup itemlistcontainer')
        }
    }, [id, setItems]);

    useEffect(() => {
        const abortController = new AbortController();
        (items.length !== 0) ? setMessage() : setMessage(<Loading />);
        return () => {
            abortController.abort();
            console.log('cleanup itemlistcontainer msg')
        }
    }, [items]);

    return (
        <main>
            <div className='container'>
                <NavContainer setItems={setItems} />
                <div className='container text-center'>{message}</div>
                <ItemList items={items} />
            </div>
        </main>
    )
}

export default ItemListContainer;
