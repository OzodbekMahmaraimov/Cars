import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import nimadir from '../images/nimadir.svg';
import balon from '../images/balon.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Automobiles = ({ city, model, img }) => {
    return (
        <Card className='position-relative border-0 overflow-hidden'>
            <button className='position-absolute border-0 py-1 px-3 rounded-2 top-0 end-0 me-3 mt-3'>{city}</button>
            <LazyLoadImage src={img} effect='blur' className='cardImg pt-5 pb-4 mt-3 pointer' />
            <CardBody className='d-flex flex-column gap-2 px-4'>
                <h3>{model}</h3>
                <div className='d-flex align-items-center w-100 gap-3'>
                    <img src={nimadir} alt="nimadir" />
                    <p className='pt-2 sifat'>2,3 л/бензин</p>
                    <img src={balon} alt="balon" />
                    <p className='pt-2 sifat'>317 л.с.</p>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                    <button className='car-btn border-0 rounded-2 text-white'>Забронировать</button>
                    <h6><span className='text-kulrang'>от</span> <span className='fs-2'>7 150</span> <span className='text-kulrang'>руб/сут.</span></h6>
                </div>
            </CardBody>
        </Card>
    )
}

export default Automobiles