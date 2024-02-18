import React from 'react'
import cars1 from '../imgs/car1.png'
import icon1 from '../imgs/icon1.png'
import icon2 from '../imgs/icon2.png'
import './Cards.css'


const Card = () => {
  return (
   <>
   <div>
    <img className='cars1' src={cars1} alt=".." />
    <h4 className='car-y'>Ford Mustang VI</h4>
    <img className='icon' src={icon1} alt="" />
    <h6 className='car-y2'>2,3 л/бензин</h6>
    <img className='icon2' src={icon2} alt="" />
    <h6 className='car-y3'>317 л.с.</h6>
    <h3 className='car-y4'>от 7150 руб/сут</h3>
   </div>
   
   
   </>
  )
}

export default Card