import React from 'react';

const ItemCount = ({ stock, onAdd, count, setCount }) => {


    const handleAdd = () => setCount(count + 1);
    const handleSubtract = () => setCount(count - 1);

        return (
            <div className='item-count'>
                <div className='selector-cantidad d-flex col-auto'>
                    {(count === 1) 
                    ? <button className="btn btn-count btn-secondary" disabled onClick={handleSubtract}>-</button>
                    : <button className="btn btn-count btn-secondary"onClick={handleSubtract}>-</button>}
                    <input type="text" className="form-control form-count p-1" placeholder={count} readOnly />
                    {(count === stock )
                    ? <button className="btn btn-count btn-secondary" disabled onClick={handleAdd}>+</button>
                    : <button className="btn btn-count btn-secondary" onClick={handleAdd}>+</button>}
                    <button className="btn btn-add btn-secondary" onClick={onAdd}>Agregar al carrito</button>
                
                </div>
            </div>
        )
};

export default ItemCount;

