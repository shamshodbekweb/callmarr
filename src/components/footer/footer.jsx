import React from 'react';
import '../footer/style.css';



function Footer() {
    return (
        <div className="Footer">
            <div className="container_footer">
                <div className="all_footer">
                    <div className="all_footer_2">
                        <div className="tariff1"><br /><br />
                            <h1>Бесплатно<br />
                                О руб.</h1>
                            <p>Тестовая версия на 14 дней и 20 <br /> руб. на балансе для проверки <br /> качества связи</p>
                            <br /> <br /><br /><br /><br /><br /><br /><br /><br />
                            <button className='button1'>ПОПРОБОВАТЬ</button>
                        </div>
                        <div className="tariff2"><br /><br />
                            <h1>При оплате на <br />
                                1 год от 299 руб..</h1>
                            <p>Платите только за наш сервис, <br /> связь оплачивается по <br /> минимальной цене 4 руб. за <br /> минуту.</p>
                            <br /> <br /><br /><br /><br /><br /><br /><br />
                            <button className='button1'>ПОДКЛЮЧИТЬ</button>
                        </div>
                    </div>
                </div>
                <div className="end"></div>
            </div>
        </div>
    );
}

export default Footer;
