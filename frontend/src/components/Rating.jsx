import React from 'react'
import { FaStar,FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

function Rating({ value, text }) {
  const getStarIcon = (rating) => {
    if (rating >= 1) {
      return <FaStar />;
    } else if (rating >= 0.5) {
      return <FaStarHalfAlt />;
    } else {
      return <FaRegStar />;
    }
  };

  return (
    <div className='rating'>
      <span>{getStarIcon(value)}</span>
      <span>{getStarIcon(value + 1)}</span>
      <span>{getStarIcon(value + 2)}</span>
      <span>{getStarIcon(value + 3)}</span>
      <span>{getStarIcon(value + 4)}</span>
      <span rating-text>{text && text}</span>
    </div>
  )
}


export default Rating
