import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
    return (
        <CardGroup className='card-group'>
            <div className='row item-list'>
                {items.map(item => <Item key={item.id} item={item} />)}
            </div>
        </CardGroup>
    )
}

export default ItemList;
