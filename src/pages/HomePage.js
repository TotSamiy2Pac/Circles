import React from 'react';
import Layout from "../components/layout/Layout";
import ChoiceComponent from "./ChoiceComponent";

const HomePage = () => {
    return (
        <Layout>
            <h3>Home Page</h3>
            <ChoiceComponent/>
        </Layout>
    );
};

export default HomePage;