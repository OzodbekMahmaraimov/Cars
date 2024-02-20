import React from 'react';
import './Asilbek1.css'
import Kalit from '../Image/Kalit.jpg';
import Arrow from '../Image/Arrow.png';
import Audi from  '../Image/Audi.jpg';
import Mers from '../Image/Mers.jpg';
function Usuli() {

    return (  
        <>
            <h2 className="Pages">Наши услуги</h2>
            <div className='box'>
                <img className='Kalit' src={Kalit} alt="..." />
                <h5>Доставляем авто в любую</h5>
                <h5  className='d-flex py-.7'> точку Москвы</h5>
                <button className='Arow'><img src={Arrow} alt="" /></button>
            </div>

            <div className='box1'>
                <img className='Kalit1' src={Audi} alt="..." />
                <h5>Аренда авто с личным</h5>
                    <h5>водителем</h5>
                <button className='Arow'><img src={Arrow} alt="" /></button>
            </div>

            <div className='box2'>
                <img className='Kalit1' src={Mers} alt="..." />
                <h5>Водитель </h5>
                <h5  className='d-flex py-.7'>на подмену</h5>
                <button className='Arow'><img src={Arrow} alt="" /></button>
            </div> 
        </>
    );
}

export default Usuli;