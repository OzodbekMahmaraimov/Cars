import React from 'react'

const Texts = ({ heading, paragraph, color, addClass }) => {
    return (
        <>
            <h3 className={`heading-title ${addClass}`}>{heading}</h3>
            <p style={{color: color}} className={`paragraph-title ${addClass}`}>{paragraph}</p>
        </>
    )
}

export default Texts