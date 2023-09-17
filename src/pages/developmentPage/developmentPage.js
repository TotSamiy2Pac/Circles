import React from 'react';
import './style.css';
import Layout from "../../components/layout/layout";
import ClubsTitle from "../../components/clubsTitle/clubsTitle";

const DevelopmentPage = () => {
    return (
        <div className={'container'}>
            <Layout>
                <ClubsTitle/>
            </Layout>
        </div>
    );
};

export default DevelopmentPage;