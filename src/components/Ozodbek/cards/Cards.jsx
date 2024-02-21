import React from 'react'
import "./cards.css"
import { Card, CardBody, CardTitle } from 'reactstrap'
import card1 from '../images/card-1.jpg'
import card2 from '../images/card-2.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaArrowRight } from "react-icons/fa6";

const Cards = () => {
    return (
        <section className='cards mx-auto mt-5'>
            <h1 className='py-5 unbounded lh-base'>Аренда премиум автомобилей <br /> для мероприятий</h1>
            <div className='cardlar w-100'>
                <Card style={{ width: '100%' }}>
                    <LazyLoadImage className='img-fluid card-img pointer' src={card1} effect='blur' alt="..." />
                    <CardBody className='cardBody'>
                        <div className='d-flex flex-column justify-content-between'>
                            <h4>Аренда авто на свадьбу</h4>
                            <p>Предоставляем аренду премиальных автомобилей для свадьбы с водителем</p>
                        </div>
                        <button className='rounded-circle mx-auto my-auto'><FaArrowRight fontWeight="400" /></button>
                    </CardBody>
                </Card>
                <Card style={{ width: "100%" }}>
                    <LazyLoadImage className='img-fluid card-img pointer' src={card2} effect='blur' alt="..." />
                    <CardBody className='cardBody'>
                        <div className='d-flex flex-column justify-content-between'>
                            <h4>Аренда авто для фотосессий</h4>
                            <p>Предоставляем аренду премиальных автомобилей для фотосессий или видеосъемки</p>
                        </div>
                        <button className='rounded-circle mx-auto my-auto'><FaArrowRight fontWeight="400" /></button>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}

export default Cards