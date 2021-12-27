import React from 'react'
import { formatCurrency } from '../../helpers/helpers';


const PriceItems = ({ value }) => {


    return (

        <span>{formatCurrency(value)}</span>

    )
};

export default PriceItems;
