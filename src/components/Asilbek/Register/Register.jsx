import React from "react";
import './Register.css';
import Usul from '../Image/Usul.jpg';
function Register() {
    return (    
        <>
            <div className="Body"> 
                <img className="usul" src={Usul} alt="..." />
                <h1 className="Vopros">Остались вопросы?</h1>
                <div className="VAmi">
                    <p>Менеджер свяжется с вами в течение 15 минут и сможет</p>
                <p>ответить на все интересующие вопросы</p>
                <h1 className="Nol">+7 (499) 110-20-47</h1>
                <input className="Виктор" type="text"placeholder="Виктор" />
                <input className="Виктор1" type="text"placeholder="+7 (916) 123-45-67" />
                <button className="Забронировать">Забронировать</button>
                
                </div>
               
                <div className="otpravit">
                <p>Отправляя форму, я соглашаюсь</p>
                <p>с политикой обработки персональных данных</p>
                </div>
                <input className="check" type="checkbox"/>
            </div>
        </>
    );
}

export default Register;