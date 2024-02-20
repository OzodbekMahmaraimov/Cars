import React from 'react'
import './home.scss'
import Numbers from './Numbers'
import groupLogo from '../images/input-group.svg'

const Home = () => {
    return (
        <>
            <section className='home mb-0 mx-auto d-flex justify-content-center'>
                <div className='text-white text-center d-flex flex-column justify-content-around justify-content-sm-start gap-5 w-100 mt-sm-5'>
                    <div className='home-heading mx-auto'>
                        <h1 className='heading'>Аренда авто в Москве</h1>
                        <h5>Прокат или аренда автомобиля с водителем и без</h5>
                    </div>
                    <div className='w-lg-75 w-100 mx-auto d-flex flex-column gap-4'>
                        <hr className='linear' />
                        <div className='mx-auto numbers'>
                            <Numbers idx={1} title1={`Большой парк`} title2={`автомобилей в наличии`} />
                            <Numbers idx={2} title1={`Доставка авто`} title2={`до вашей геолокации`} />
                            <Numbers idx={3} title1={`Скидки постоянным`} title2={`клиентам`} />
                            <Numbers idx={4} title1={`Любая форма`} title2={`оплаты`} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-100'>
                <div className='buyurtma px-2 mx-auto px-0 px-md-5 d-flex flex-column gap-4 justify-content-center '>
                    <h5 className='unbounded'>Заказать аренду online</h5>
                    <div className='buyurtma-dev w-100'>
                        <form className='form-group-buyurtma w-100 d-flex justiy-content-center align-items-center gap-2'>
                            <img src={groupLogo} alt="group-logo" />
                            <input className='' type="text" placeholder='Начало аренды' />
                        </form>
                        <form className='form-group-buyurtma w-100 d-flex justiy-content-center align-items-center gap-2'>
                            <img src={groupLogo} alt="group-logo" />
                            <input className='' type="text" placeholder='Завершение аренды' />
                        </form>
                        <form className='my-auto form-checkbox'>
                            <input className='my-2 me-2 checkbox' type="checkbox" id='vnedornik' />
                            <label className='check-label' htmlFor="vnedornik">Внедорожник</label>
                            <input className='my-2 me-2 checkbox' type="checkbox" id='sport' />
                            <label className='check-label ' htmlFor="sport">Спорт</label>
                        </form>
                        <form className='my-auto form-checkbox'>
                            <input className='my-2 me-2 checkbox' type="checkbox" id='biznes' />
                            <label className='check-label' htmlFor="biznes">Бизнес</label>
                            <input className='my-2 me-2 checkbox' type="checkbox" id='sportcar' />
                            <label className='check-label' htmlFor="sportcar">Спорткар</label>
                        </form>
                        <form className='my-auto form-checkbox'>
                            <input className='my-2 me-2 checkbox' type="checkbox" id='premium' />
                            <label className='check-label' htmlFor="premium">Премиум</label>
                            <input className='my-2 me-2 checkbox' type="checkbox" id='komfort' />
                            <label className='check-label' htmlFor="komfort">Комфорт</label>
                        </form>
                        <button className='px-4 py-3 py-lg-0 nayti white-nowrap'>
                            Найти варианты
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home