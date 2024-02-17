import React from 'react'
import './home.css'

const Numbers = ({ idx, title }) => {
    return (
        <div className='d-flex align-items-start text-start gap-3'>
            <button className='rounded-circle btn-number border-0'>{idx}</button>
            <h6 className='lh-base'><pre>{title}</pre></h6>
        </div>
    )
}

export default Numbers