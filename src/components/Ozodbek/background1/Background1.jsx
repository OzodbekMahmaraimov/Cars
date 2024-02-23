import React from "react";
import "./background-1.css";
import Texts from "../title/Texts";
import "../home/home.scss"

const Background1 = () => {
    return (
        <section className="bg-1 mt-5 mx-auto d-flex align-items-center">
            <div className="bg-container mx-auto">
                <h1 className="unbounded text-white px-3">Арендовать авто прямо сейчас!</h1>
                <div className="w-100 bg-container-item py-5 px-3">
                    <div className="text-white bg-container-item-1">
                        <Texts heading="Dizrental в Москве предлагает широкий выбор моделей от ведущих
                            производителей, таких как Mercedes, BMW, Audi . Клиенты могут
                             выбирать между спортивными автомобилями, роскошными седанами или
                            эксклюзивными внедорожниками, чтобы насладиться комфортом и
                            эстетикой этих превосходных машин."
                            paragraph="Благодаря услугам аренды, каждый желающий может ощутить себя
                            владельцем такого автомобиля на несколько дней или даже на
                            несколько часов, без необходимости покупки и обслуживания."
                            color="#D0D0D0" addClass="pe-0 pe-xl-4" />
                    </div>
                    <div className="d-flex flex-column justify-content-between gap-3">
                        <input className="border-0 w-100 py-4 rounded-3 viktor-input" type="text" placeholder="Виктор" />
                        <input className="border-0 w-100 py-4 rounded-3" type="text" placeholder="+7 (916) 123-45-67" />
                        <button className="w-100 py-4 rounded-2 btn btn-outline-dark">Забронировать</button>
                        <input className='my-2 me-2 checkbox' type="checkbox" id='otpravlya' />
                        <label className='check-label text-white' htmlFor="otpravlya">Отправляя форму, я соглашаюсь
                            с политикой обработки персональных данных</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Background1;
