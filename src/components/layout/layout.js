import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = ({children}) => {
    return (
        <div className={'layout'}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;