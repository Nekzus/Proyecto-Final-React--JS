import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetchCategories } from '../../hooks/useFetchCategories';

const MenuCategories = () => {
    const [categories] = useFetchCategories();
    const navigate = useNavigate();
    const handleSelect = (e) => {
        navigate(`/categoria/${e.currentTarget.value}`)
    };

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