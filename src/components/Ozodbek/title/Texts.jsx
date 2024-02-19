import React from 'react'

const Texts = ({ heading, paragraph }) => {
    return (
        <>
            <h3 className='heading-title'>{heading}</h3>
            <p className='paragraph-title'>{paragraph}</p>
        </>
    )
}

export default Texts