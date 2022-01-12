import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import queryString from 'query-string';
import { getItemsByTitle } from '../Selectors/getItemsByTitle';
import MessageEmptySearch from '../Common/MessageEmptySearch';

const SearchContainer = () => {

    const [items] = useState(JSON.parse(localStorage.getItem('items')) || []);
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const searchItems = getItemsByTitle(items, q);

    return (
        <>
            <div className='container'>
                {(q !== '') && (searchItems.length === 0)
                    ? <MessageEmptySearch q={q} />
                    : <ItemList items={searchItems} />}
            </div>
        </>
    )
};
export default SearchContainer;
