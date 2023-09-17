import React from 'react';
import {Link} from "react-router-dom";
import './style.css';
import SignIn from "../signIn/signIn";
import {Button} from "@mui/material";

console.log()
const Header = () => {

    return (
        <header>
            <Link to={'/'}>
                <h3>
                    КРУЖКИ
                </h3>
            </Link>
            <nav>
                <Link to={'/'}>
                    Home
                </Link>
                <Link>
                    About
                </Link>
                <Link>
                    Contact
                </Link>
                <Link>

                </Link>
            </nav>
            <div>
                <div className={'btn-wrapper'}>
                    <SignIn/>
                    <Button>
                        <Link to={'/sign-up'}>Sign Up</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;