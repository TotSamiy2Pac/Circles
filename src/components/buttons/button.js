import React from 'react';
import './style.css';

const Button = (props) => {
    return (
        <div>
            <button style={{backgroundColor: props.color}}>
                {props.name}
            </button>
        </div>
    );
};

export default Button;