import React from 'react'

const PriceItems = ({ value }) => {

    //**DAR FORMATO DE MONEDA A LOS MONTOS */
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2,
        }).format(value);
    };

    return (

        <span>{formatCurrency(value)}</span>

    )
};

export default PriceItems;
