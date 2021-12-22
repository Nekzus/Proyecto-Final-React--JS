import React from 'react';

const ItemCount = ({ stock, onAdd, count, setCount }) => {


    const handleAdd = () => setCount(count + 1);
    const handleSubtract = () => setCount(count - 1);

    if (count > 1 && count < stock) {
        return (
            <div className='item-count'>
                <div className='selector-cantidad d-flex col-auto'>
                    <button className="btn btn-count btn-secondary" onClick={handleSubtract}>-</button>
                    <input type="text" className="form-control form-count p-1" placeholder={count} readOnly />
                    <button className="btn btn-count btn-secondary" onClick={handleAdd}>+</button>
                    <button className="btn btn-add btn-secondary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        )
    } else if (count === 1) {
        return (
            <div className='item-count'>
                <div className='selector-cantidad d-flex col-auto'>
                    <button className="btn btn-count btn-secondary" disabled onClick={handleSubtract}>-</button>
                    <input type="text" className="form-control form-count p-1" placeholder={count} readOnly />
                    <button className="btn btn-count btn-secondary" onClick={handleAdd}>+</button>
                    <button className="btn btn-add btn-secondary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        )
    } else if (count === stock) {
        return (
            <div className='item-count'>
                <div className='selector-cantidad d-flex col-auto'>
                    <button className="btn btn-count btn-secondary" onClick={handleSubtract}>-</button>
                    <input type="text" className="form-control form-count p-1" placeholder={count} readOnly />
                    <button className="btn btn-count btn-secondary" disabled onClick={handleAdd}>+</button>
                    <button className="btn btn-add btn-secondary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        )
    } else {
        return;
    }
};

export default ItemCount;

