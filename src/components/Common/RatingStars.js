import React, { memo } from 'react'
import { RiStarSFill, RiStarHalfSFill } from 'react-icons/ri';

const RatingStars = ({rating}) => {
    return (
        <>
            <span className='rating-stars'><RiStarSFill/><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarHalfSFill /></span> <span className='rating-number-card'>{rating}</span>
        </>
    )
}

export default memo(RatingStars);
