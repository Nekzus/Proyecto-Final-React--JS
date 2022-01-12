import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loading from '../Common/Loading';
import { useFetchItems } from '../../hooks/useFetchItems';

const ItemListContainer = () => {
    const { id } = useParams();
    const [items, loading] = useFetchItems(id);

    return (
        <main>
            <div className='container'>
                {loading ? <div className='container text-center'><Loading /></div> : <ItemList items={items} />}
            </div>
        </main>
    )
};
export default ItemListContainer;
