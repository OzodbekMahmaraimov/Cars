import React from 'react';
import './Straxovka.css';
import St from '../Image/St.jpg'
import S from '../Image/S.jpg'
import DS from '../Image/DS.jpg'
import h from '../Image/h.jpg'
import K from '../Image/K.jpg'

function Straxovka() {
    return ( 
        <>
            <div className='Diznel'>
            <h1>6 причин заказат</h1>
            <h1> аренду авто в  DizRental</h1>
            </div>
            <div className='Страховка'>
                  <img className='St-image' src={St} alt="" />
            <div className='St'>
            <h4>Страховка</h4>
            <p className='vse'>Все наши автомобили застрахованы </p>
               <p className='Po'> по ОСАГО И КАСКО</p>
            </div>
        
            </div>

            <div className='Страховка1'>
            <img className='St-image' src={S} alt="" />
            <div className='St'>
            <h4>Ценовая политика</h4>
            <p className='vse'>Всегда доступные цены и приятные</p>
            <p className='Po'> бонусы постоянным клиентам</p>
            </div>       
            </div> 
            <div className='Страховка2'>
            <img className='St-image' src={S} alt="" />
            <div className='St'>
            <h4>Ценовая политика</h4>
            <p className='vse'>Всегда доступные цены и приятные</p>
            <p className='Po'> бонусы постоянным клиентам</p>
            </div>       
            </div> 

            <div className='Страховка3'>
            <img className='St-image' src={DS} alt="" />
            <div className='St'>
            <h4>Оплата</h4>
            <p className='vse'>Любая удобная для вас форма оплаты </p>
            <p className='Po'>(нал/безнал, банковский перевод)</p>
            </div>       
            </div>
            
            <div className='Страховка4'>
            <img className='St-image' src={h} alt="" />
            <div className='St'>
            <h4>Автопарк</h4>
            <p className='vse'>Весь автопарк в отличном состоянии</p>
            <p className='Po'>и всегда пополняется новыми моделями</p>
            </div>       
            </div>

            <div className='Страховка5'>
            <img className='St-image' src={K} alt="" />
            <div className='St'>
            <h4>Скорость</h4>
            <p className='vse'>Оформление аренды любого авто в </p>
            <p className='Po'>течении не более 15 минут</p>
            </div>       
            </div>
        </>
     );
}

export default Straxovka;