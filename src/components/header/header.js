import React from 'react';
import {Link} from "react-router-dom";
import './style.css';


const Header = () => {
    return (
        <header>
            <Link to={'/'}>
                <h3>
                    LOGO
                </h3>
            </Link>
        </header>
    );
};

export default Header;