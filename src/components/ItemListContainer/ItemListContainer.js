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
        let mounted = true;
        if (mounted) {
            if (!id) {
                readDataDB('movies', setItems, 'vote_average', 'desc');

            } else {
                filterDataDB('movies', 'genre_ids', id, setItems);
            }
        }
        if (items.length !== 0) {
            setMessage()
        } else {
            setMessage(<Loading />)
        }
        return () => {
            mounted = false;
        }
    }, [id, items]);


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
