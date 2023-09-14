import React from 'react';
import Layout from "../../components/layout/layout";
import ChoiceComponent from "../choiceComponent/choiceComponent";
import './style.css';

const HomePage = () => {
    return (
        <Layout>
            <h3>Home Page</h3>
            <ChoiceComponent/>
        </Layout>
    );
};

export default HomePage;