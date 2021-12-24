import React from 'react';

const ItemCount = ({ stock, count, setCount }) => {


    const handleAdd = () => setCount(count + 1);
    const handleSubtract = () => setCount(count - 1);

    return (
        <>
            {(count === 1)
                ? <button className="btn btn-count btn-secondary" disabled onClick={handleSubtract}>-</button>
                : <button className="btn btn-count btn-secondary" onClick={handleSubtract}>-</button>}
            <input type="text" className="form-control form-count p-1" placeholder={count} readOnly />
            {(count === stock)
                ? <button className="btn btn-count btn-secondary" disabled onClick={handleAdd}>+</button>
                : <button className="btn btn-count btn-secondary" onClick={handleAdd}>+</button>}
        </>
    )
};

export default ItemCount;

