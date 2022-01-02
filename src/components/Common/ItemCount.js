import React, { useState } from 'react';

const ItemCount = ({ stock, onSubmit }) => {

    const [quantity, setQuantity] = useState(1);

    onSubmit(quantity);

    const handleAdd = () => setQuantity(quantity + 1);
    const handleSubtract = () => setQuantity(quantity - 1);

    return (
        <>
            {(quantity === 1)
                ? <button className="btn btn-count btn-secondary" disabled onClick={handleSubtract}>-</button>
                : <button className="btn btn-count btn-secondary" onClick={handleSubtract}>-</button>}
            <input type="text" className="form-control form-count p-1" placeholder={quantity} readOnly />
            {(quantity === stock)
                ? <button className="btn btn-count btn-secondary" disabled onClick={handleAdd}>+</button>
                : <button className="btn btn-count btn-secondary" onClick={handleAdd}>+</button>}
        </>
    )
};

export default ItemCount;

