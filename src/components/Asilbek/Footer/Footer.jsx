import React from "react";
import './Footer.css';
import logo from '../Image/logo.svg';
import location from '../Image/location.png';
import mail from '../Image/mail.png';
import telegram from '../Image/telegram.png';
import vatsap from '../Image/vatsap.png';
function Footer() {
    return (
        <>
            <div className="Footer">
                <img className="dcc" src={logo} alt="" />
                <h3 className="number">+7 (499) 110-20-47</h3>
                <button type="button" class="btn btn-outline-light   sss">Заказать звонок</button>
                <p className="moskva">г. Москва, Автомобильный проезд, д.3 стр.5</p>
                <p className="moskva1">info@dizrental.ru</p>
                <img className="location" src={location} alt="" />
                <img className="mail" src={mail} alt="" />
                <img className="vatsap" src={vatsap} alt="" />
                <img className="vatsap1" src={telegram} alt="" />

                <div className="haha">
                    <h4>Клиентам</h4>
                    <p>О нас</p>
                    <p>Условия</p>
                    <p>Отзывы</p>
                    <p>Статьи</p>
                    <p>Контакты</p>
                </div>
                <div className="haha0">
                    <h4>Автопарк</h4>
                    <p>Внедорожники</p>
                    <p>СпортКар</p>
                    <p>Бизнес</p>
                    <p>Премиум</p>
                    <p>Комфорт</p>
                </div>
                <div className="haha1">
                    <h4>Мероприятие</h4>
                    <p>На свадьбу</p>
                    <p>На фотосессию</p>
                    <p>На видеосъемку</p>
                    <p>На день рождения</p>
                    <hr className="hr1" />

                </div>
                <p className="lla">© 2023 DizRental</p>
                <p className="lla1">Политика конфиденциальности</p>
            </div>

        </>
    );
}

export default Footer;