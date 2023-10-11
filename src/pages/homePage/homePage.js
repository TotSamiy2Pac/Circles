import React from 'react';
import Layout from "../../components/layout/layout";
import ChoiceComponent from "../choiceComponent/choiceComponent";
import './style.css';
import boy from '../../components/assets/boy.png'
import Button from "../../components/buttons/button";
import girl from '../../components/assets/girl.png'
import girl2 from '../../components/assets/girl2.png'
const HomePage = () => {
    return (
        <Layout>
            <section className="first">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-6-left-box">
                            <div className="box">
                                <h1>платформа кружков для детей</h1>
                                <h3>Кружки – ваш личный эксперт в мире детства!</h3>
                                <p>Мы стремимся предоставить
                                    надежную платформу, где родители могут быстро и легко выбрать подходящие курсы и секции, а также организовать мероприятия, праздники и лагеря. Наша цель - сделать детские годы
                                    яркими, насыщенными и запоминающимися, предлагая удобный и надежный сервис для
                                    поиска и записи на занятия.</p>
                            </div>
                            <Button
                                name = 'о платформе'
                                backgroundColor = '#C3DCE3'
                                color = '#2B788B'
                            />
                        </div>
                        <div className="col-6">
                            <div className="box">
                                <img className={'boy'} src={boy} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="second">
                <div className="container">
                    <ChoiceComponent/>
                </div>
            </section>
            <section className="third">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="box">
                                <img src={girl} alt=""/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fourth">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="box">
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box">
                                <img src={girl2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default HomePage;