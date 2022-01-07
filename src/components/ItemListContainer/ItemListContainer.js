import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loading from '../Common/Loading';
import { useFetchItemListContainer } from '../../hooks/useFetchItemListContainer';

const ItemListContainer = () => {
    const { id } = useParams();
    const [items, loading] = useFetchItemListContainer(id);

    return (
        <main>
            <div className='container'>
                {loading ? <div className='container text-center'>{<Loading />}</div> : <ItemList items={items} />}
            </div>
        </main>
    )
};
export default ItemListContainer;
