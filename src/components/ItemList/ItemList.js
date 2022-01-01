import React, { memo } from 'react';
import { CardGroup } from 'react-bootstrap';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
    console.log('Render itemlist');
    return (
        <CardGroup className='card-group'>
            <div className='row item-list'>
                {items.map(item => <Item key={item.id} item={item} />)}
            </div>
        </CardGroup>
    )
}

export default memo(ItemList);
