import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import queryString from 'query-string';
import { getItemsByTitle } from '../Selectors/getItemsByTitle';

const SearchContainer = () => {

    const [items] = useState(JSON.parse(localStorage.getItem('items')) || []);
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const searchItems = getItemsByTitle(items, q);
    console.log('items filtrados', searchItems);

    return (
        <>
            <div className='container'>
                <ItemList items={searchItems} />
            </div>
        </>
    )
};
export default SearchContainer;
