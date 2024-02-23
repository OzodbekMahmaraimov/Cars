import React from "react";
import './Dubay.css';
import fon from '../Image/fon.jpg';
import Qizil from '../Image/Qizil.jpg'
import Qizil12 from '../Image/Qizil12.jpg'
import Korhonalr from '../Image/Korhonalr.jpg'
function Dubay() {
    return (
        <>

            <img className="Fon" src={fon} alt="" />
            <div className="Box-quti">
                <div className="Fonlar">
                    <h1>Car hire in Dubai for</h1>
                    <h1>different budget</h1>
                    <div className="yozuvlar">
                        <p>We guarantee that you get technically sound,</p>
                        <p> clean car with a full tank, comfortable interior.,</p>
                        <p> Our staff will independently pick up the car at,</p>
                        <p>  the expiration of the rental term at the specified,</p>
                        <p>location.</p>
                        <div className="yozuclar-pro">
                            <p>We strive to make car rental in Dubai affordable for everyone. That's why you</p>
                            <p>can rent cars in our office:</p>
                            <p>Economy. Sedans and SUVs you can rent from 149 AED ($40) per</p>
                            <p>day.Comfort. Sports cars, vans, SUVs, sedans with comfortable saloon can</p>
                            <p>be rented from 219 AED ($59) per day.Premium. Premium SUVs and </p>
                            <p>prestigious convertibles can be rent from AED 439 ($119) per day.</p>
                        </div>
                    </div>
                    <img className="Qizil" src={Qizil} alt="" />
                </div>
                <div className="Qizillar">
                    <img className="qizil12" src={Qizil12} alt="" />
                    <div className="mos">
                        <h1>Аренда машинв</h1>
                        <h1> B Москвe</h1>
                    </div>
                    <div className="Telefona">
                        <p>Для получения более подробной информации о прокате авто можно </p>
                        <p>посетить наш офис, оставить заявку на сайте или позвонить</p>
                        <p>по телефону 7 (499) 110-20-47</p>
                        <p className="project">Мы всегда рады помочь Вам по любым вопросам и обеспечить</p>
                        <p>качественным авто.</p>
                        <hr className="hr" />
                        <div>
                            <div className="let">
                                <h6>Более 8 лет на рынке </h6><h6>проката авто</h6>
                                <h1 className="Eight">8</h1>
                            </div>
                        </div>
                        <div className="Seven">
                            <div className="let">
                                <h6>24  премиальных и  </h6><h6>эксклюзивных моделей</h6>
                                <h1 className="Eight">24</h1>
                            </div>
                        </div>

                        <div className="Seven1">
                            <div className="let">
                                <h6>24  премиальных и  </h6><h6>эксклюзивных моделей</h6>
                                <h1 className="Eight1">🚓</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="Kompaniyalar" src={Korhonalr} alt="" />
        </>
    );
}

export default Dubay;