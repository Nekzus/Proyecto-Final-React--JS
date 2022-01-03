import React, { useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { CardGroup } from 'react-bootstrap';
import Loading from '../Common/Loading';
import { useFetchItemDetailContainer } from '../../hooks/useFetchItemDetailContainer';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, loading] = useFetchItemDetailContainer(id);

    useEffect(() => {
    console.log('Render itemdetailcontainer'); //TODO: remove
    });

    return (
        <CardGroup className='card-group'>
            <div className='container'>
                {loading ? <div className='container text-center'>{<Loading />}</div> : <ItemDetail item={item} />}
            </div>
        </CardGroup>
    )
};
export default ItemDetailContainer;
