import React from 'react'
import './Card2.css'
import car6 from '../imgs/car3.png'

const Cards2 = () => {
    return (
     <>
    <div>
    <img className='car6' src={car6} alt="" />
    <h2 className='car-y9'>Арендовать авто прямо сейчас!</h2>

    <div className='box-y1'>
        <p>Aренда элитных автомобилей в Москве предлагает широкий выбор </p>
        <p className='y-1'>моделей от ведущих производителей, таких как Mercedes, BMW, Audi . </p>
        <p className='y-1'>Клиенты могут выбирать между спортивными автомобилями, </p>
        <p className='y-1'>роскошными седанами или эксклюзивными внедорожниками, чтобы </p>
        <p className='y-1'>насладиться комфортом и эстетикой этих превосходных машин.</p>
        <p className='y-1'>Благодаря услугам аренды, каждый желающий может ощутить себя </p>
        <p className='y-1'> владельцем такого автомобиля на несколько дней или даже на </p>
        <p className='y-1'> несколько часов, без необходимости покупки и обслуживания.</p>

    </div>
        <input className='input ' type="text" placeholder='имя' />
        <input className='input2 ' type="number" placeholder='телефон' />

        <button className='button3'>ЗАБРОНИРОВАТЬ</button>
    </div>
     
     </>
    )
  }
  
  export default Cards2