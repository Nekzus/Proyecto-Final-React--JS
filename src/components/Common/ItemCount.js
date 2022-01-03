import React, { useState } from 'react';

const ItemCount = ({ stock, onSubmit }) => {

    const [count, setCount] = useState(1);

    const handleOnAdd = () => {
        onSubmit(count);
    };

    const handleAdd = () => setCount(count + 1);
    const handleSubtract = () => setCount(count - 1);

    return (
        <>
            {stock > 0
                ? <div className='selector-cantidad d-flex col-auto'>
                    {(count === 1)
                        ? <button className="btn btn-count btn-secondary" disabled onClick={handleSubtract}>-</button>
                        : <button className="btn btn-count btn-secondary" onClick={handleSubtract}>-</button>}
                    <input type="text" className="form-control form-count p-1" placeholder={count} readOnly />
                    {(count === stock)
                        ? <button className="btn btn-count btn-secondary" disabled onClick={handleAdd}>+</button>
                        : <button className="btn btn-count btn-secondary" onClick={handleAdd}>+</button>}
                    <button className="btn btn-add btn-secondary" onClick={handleOnAdd}>Agregar al carrito</button>
                </div>
                : (<div className='selector-cantidad d-flex col-auto'>
                    <button className="btn btn-add btn-secondary" onClick={handleOnAdd} disabled={true}>Agotado</button>
                </div>)
            }
        </>
    )
};

export default ItemCount;

