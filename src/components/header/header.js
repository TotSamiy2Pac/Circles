import React from 'react';
import {Link} from "react-router-dom";
import './style.css';
import Button from "../buttons/button";

const Header = () => {
    return (
        <header>
            <Link to={'/'}>
                <h3>
                    LOGO
                </h3>
            </Link>
            <nav>
                <Link>
                    <a href="">Наш блог</a>
                </Link>
                <Link>
                    <a href=""></a>
                </Link>
                <Link>
                    <a href=""></a>
                </Link>
                <Link>
                    <a href=""></a>
                </Link>
            </nav>
            <div>
                <div className={'btn-wrapper'}>
                    <Button
                        name='Sign Up'/>
                    <Button
                        name='Sign In'/>
                </div>
            </div>
        </header>
    );
};

export default Header;