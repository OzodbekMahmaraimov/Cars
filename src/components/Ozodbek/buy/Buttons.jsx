import React from 'react';

const Buttons = ({ title, carImg, outline }) => {
  return (
    <button className={`${outline} py-3 px-3 d-flex gap-3 align-items-center`}>
        <img src={carImg} alt="car-1" />
        {title}
    </button>
  )
}

export default Buttons