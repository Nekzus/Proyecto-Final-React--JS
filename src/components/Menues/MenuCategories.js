import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { readDataDB } from '../../Firebase/functions';

const MenuCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Render menucategories'); //TODO: remove
    })

    const handleSelect = (e) => {
        navigate(`/categoria/${e.currentTarget.value}`)
    }
    useEffect(() => {
        setIsMounted(true);
        isMounted && readDataDB('categories', setCategories, 'name', 'asc');
        return () => {
            setIsMounted(false);
            console.log('cleanup menucategories'); //TODO: remove
        }
    }, [setCategories, isMounted]);

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