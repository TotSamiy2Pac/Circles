import React from 'react';
import './style.css';
import Layout from "../../components/layout/layout";
import ClubsTitle from "../../components/clubsTitle/clubsTitle";
import TypesOfClasses from "../../components/TypesOfClasses/Types";

const DevelopmentPage = () => {
    return (
        <div className={'container'}>
            <Layout>
                <ClubsTitle/>
                <TypesOfClasses/>
            </Layout>
        </div>
    );
};

export default DevelopmentPage;