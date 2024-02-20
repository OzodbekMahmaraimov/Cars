import React from 'react'
import './home.scss'

const Numbers = ({ idx, title1, title2 }) => {
    return (
        <div className='d-flex flex-lg-row flex-column align-items-start text-start gap-3'>
            <button className='rounded-circle btn-number border-0 mx-auto'>{idx}</button>
            <h6 className='lh-base text-center text-lg-start'>{title1} <br /> {title2}</h6>
        </div>
    )
}

export default Numbers