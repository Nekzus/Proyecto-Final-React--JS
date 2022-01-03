import React from 'react'


const ItemCategories = ({ genre_txt }) => {

    return (
        
                <div className="d-flex widget-categories">
            {genre_txt.map((category, index)  => (
                    <span key={index} className="badge badge-secondary widget-cat">{category}</span>
            ))}
                </div>
        
    )

}

export default ItemCategories;
