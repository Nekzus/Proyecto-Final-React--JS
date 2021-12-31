/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { filterDataDB, readDataDB } from '../../Firebase/functions';
import { useParams } from 'react-router-dom';
import NavContainer from '../NavContainer/NavContainer';
import Loading from '../Common/Loading';

const ItemListContainer = () => {
    const [message, setMessage] = useState(['']);
    const [items, setItems] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const { id } = useParams();
    
    useEffect(() => {
    console.log('Render itemlistcontainer'); //TODO: remove
    });



    useEffect(() => {
        setIsMounted(true);
        (!id)
            ? isMounted && readDataDB('movies', setItems, 'vote_average', 'desc')
            : isMounted && filterDataDB('movies', 'genre_ids', id, setItems);

        return () => {
            setIsMounted(false);
            console.log('cleanup itemlistcontainer'); //TODO: remove
        }
    }, [id, setItems, isMounted]);

    useEffect(() => {
        (items.length !== 0) ? setMessage('') : setMessage(<Loading />);
        return () => {
            console.log('cleanup itemlistcontainer msg') //TODO: remove
        }
    }, [items]);

    return (
        <main>
            <div className='container'>
                <NavContainer />
                <div className='container text-center'>{message}</div>
                <ItemList items={items} />
            </div>
        </main>
    )
}

export default ItemListContainer;
