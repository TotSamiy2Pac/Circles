import React from 'react';
import Layout from "../../components/layout/layout";
import ChoiceComponent from "../choiceComponent/choiceComponent";
import './style.css';
import Button from "../../components/buttons/button";

const HomePage = () => {
    return (
        <Layout>
            <h3>Home Page</h3>
            <div className={'btn-wrapper'}>
                <Button
                    name='Кружки и секции'
                    color='green'
                />
                <Button
                    name='Семейный досуг'
                    color='green'
                />
                <Button
                    name='Онлайн-курсы'
                    color='purple'
                />
                <Button
                    name='Детские лагеря'
                    color='indianred'
                />
            </div>
            <ChoiceComponent/>
        </Layout>
    );
};

export default HomePage;