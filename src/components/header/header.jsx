import React from 'react';
import '../header/style.css';
import callmar from "../../assets/Callmar 1 1.png"
import callmar2 from "../../assets//Осминог 5 1.png"

function Header() {
    return (
        <div className="Header">
            <div className="container">
                <div className="navbar">
                    <img className='img_calmar' src={callmar} alt="" />
                    <ul>
                        <li> <h3>Вход</h3></li>
                        <li> <button className='btn'>Регистрация</button></li>
                    </ul>
                </div>
                <div className="main">
                    <center className='center'>
                        <img className='callmar' src={callmar2} alt="" />
                        <br />
                        <h1 className='title'>Обратный звонок на сайт </h1>
                        <p className='description'>Получайте в 3 раза больше звонков сразу после установки виджета на Ваш сайт
                            Сервис окупает свой годовой тариф в первую же неделю</p><br />
                        <button className='btn_2'>ПОДКЛЮЧИТЬ</button><br /><br />
                    </center>
                </div>
            </div>
        </div>
    );
}

export default Header;
