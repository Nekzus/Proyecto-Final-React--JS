import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { readDataDB } from '../../Firebase/functions';

const MenuCategories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const handleSelect = (e) => {
        navigate(`/categoria/${e.currentTarget.value}`)
    }
    useEffect(() => {
        readDataDB('categories', setCategories,'name', 'asc');
    }, [setCategories]);

    return (

        <select onChange={handleSelect}>
            <option value="">Categorias</option>
            {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
        </select>
    );
};

export default MenuCategories;