import React from 'react'
import "./cards.css"
import { Card, CardBody, CardTitle } from 'reactstrap'
import card1 from '../images/card-1.jpg'
import card2 from '../images/card-2.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Cards = () => {
    return (
        <section className='cards mx-auto mt-5'>
            <h1 className='py-5 unbounded lh-base'>Аренда премиум автомобилей <br /> для мероприятий</h1>
            <div className='cardlar w-100'>
                <Card style={{ width: '18rem'}}>
                    <LazyLoadImage src={card1} effect='blur' alt="..." />
                    <CardBody>
                        <CardTitle>Аренда авто на свадьбу</CardTitle>
                    </CardBody>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <LazyLoadImage src={card2} effect='blur' alt="..." />
                    <CardBody>
                        <CardTitle>Аренда авто для фотосессий</CardTitle>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}

export default Cards