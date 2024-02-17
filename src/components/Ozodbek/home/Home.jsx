import React from 'react'
import './home.css'
import Numbers from './Numbers'

const Home = () => {
    return (
        <section className='home mx-auto d-flex justify-content-center align-items-center'>
            <div className='text-white text-center d-flex flex-column gap-5 w-100'>
                <div className='w-50 mx-auto'>
                    <h1 className='heading'>Аренда авто в Москве</h1>
                    <h4>Прокат или аренда автомобиля с водителем и без</h4>
                </div>
                <div className='w-75 mx-auto d-flex flex-column gap-4'>
                    <hr className='linear' />
                    <div className='w-100 d-flex justify-content-around'>
                        <Numbers idx={1} title={`Большой парк автомобилей в наличии`} />
                        <Numbers idx={2} title={``} />
                        <Numbers idx={3} title={``} />
                        <Numbers idx={4} title={``} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home