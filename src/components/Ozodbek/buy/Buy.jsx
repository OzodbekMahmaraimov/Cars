import React from 'react'
import './buy.css'
import Buttons from './Buttons'
import car1 from '../images/car-1.svg';
import car2 from '../images/car-2.svg';
import car3 from '../images/car-3.svg';
import car4 from '../images/car-4.svg';
import car5 from '../images/car-5.svg';
import Automobiles from './Automobiles';
import automobile from './automobile.json';
import Carousel from "react-multi-carousel";

const Buy = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1200, min: 992 },
      items: 4
    },
    medium: {
      breakpoint: { max: 992, min: 768 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <section className='buy mx-auto mt-5 pb-5'>
      <div className='w-100 d-flex align-items-center flex-column flex-lg-row gap-2 gap-lg-5'>
        <h1 className='unbounded'>Наш автопарк</h1>
        <button className='btn btn-outline-dark py-2'>Смотреть все</button>
      </div>
      <Carousel responsive={responsive} className='w-100 d-flex gap-3'>
        <Buttons title="Внедорожники" carImg={car1} outline={"btn btn-dark mx-auto"} />
        <Buttons title="Внедорожники" carImg={car2} outline={"car-btns rounded-2 mx-auto"} />
        <Buttons title="Внедорожники" carImg={car3} outline={"car-btns rounded-2 mx-auto"} />
        <Buttons title="Внедорожники" carImg={car4} outline={"car-btns rounded-2 mx-auto"} />
        <Buttons title="Внедорожники" carImg={car5} outline={"car-btns rounded-2 mx-auto"} />
      </Carousel>
      <div className='w-100 cars mt-3'>
        {automobile.map((item, idx) => {
          return (
            <Automobiles key={idx} city={item.city} img={item.img} model={item.model} />
          )
        })}
      </div>
    </section>
  )
}

export default Buy