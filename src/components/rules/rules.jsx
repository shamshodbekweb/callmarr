import React from 'react';
import '../rules/style.css';
import number1 from "../../assets/01.png"
import number2 from "../../assets/02.png"
import number3 from "../../assets/03.png"
import number4 from "../../assets/04.png"
import group from "../../assets/Group 132.png"
import group1 from "../../assets/Аквалангист 2 1.png"


function Rules() {
    return (
        <div className="Rules">
            <div className="container_rules">
                <div className="all">
                    <div className="line_1">
                        <div className="_01">
                            <div className="number">
                                <img src={number1} alt="" />
                                <h2 className='ttl1'>Устанавливаете код на сайт</h2>
                            </div>
                            <p className='desc'>Вы устанавливаете на свой сайт специальный html-код. Это займет 3 минуты или мы поможем вам</p>
                        </div>
                        <div className="_02">
                            <div className="number">
                                <img src={number2} alt="" />
                                <h2 className='ttl2'>Lorem, ipsum dolor. Lorem, ipsum. </h2>
                            </div>
                            <p className='desc'> Как только менеджер взял трубку сервис автоматически связывается с клиентом и соединяет его с менеджером В среднем за 18,5  сек </p>
                        </div>
                        <center className='center1'>
                            <img src={group} alt="" />
                        </center><br />
                    </div>
                    <div className="line_2">
                        <center className='center1'>
                            <img src={group1} alt="" />
                        </center>
                        <div className="_012">
                            <div className="number">
                                <img src={number3} alt="" />
                                <h2 className='ttl1'>На Вашем сайте появится кнопка и </h2>
                            </div>
                            <p className='desc'>Посетители заходят на Ваш сайт, видят кнопку или всплывающее окно и вводят свой телефон</p>
                        </div>
                        <div className="_023">
                            <div className="number">
                                <img src={number4} alt="" />
                                <h2 className='ttl2'>Клиент теперь Ваш !</h2>
                            </div>
                            <p className='desc'>Уже через 28 секунд Ваш сотрудник общается с клиентом и делает продажу!</p>
                        </div><br />
                        <div className="vidget">
                        <h1 className='vidgets'>Посмотрите видео как работает виджет</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rules;
