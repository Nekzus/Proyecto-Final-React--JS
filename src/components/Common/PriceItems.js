import React from 'react'

//**DAR FORMATO DE MONEDA A LOS MONTOS */
export const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
    }).format(value);
};

const PriceItems = ({ value }) => {


    return (

        <span>{formatCurrency(value)}</span>

    )
};

export default PriceItems;
