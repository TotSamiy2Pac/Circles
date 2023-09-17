import React from 'react';
import {Link} from "react-router-dom";
import './style.css';

const ChoiceComponent = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-6'}>
                    <Link className={'post-wrapper'} to={`/choice/development`}>
                        <div className={'box post-box'}>
                            <h3>Развитие</h3>
                        </div>
                    </Link>
                </div>
                <div className={'col-6'}>
                    <Link className={'post-wrapper'} to={`/choice/development`}>
                        <div className={'box post-box'}>
                            <h3>Спорт</h3>
                        </div>
                    </Link>
                </div>
                <div className={'col-6'}>
                    <Link className={'post-wrapper'} to={`/choice/development`}>
                        <div className={'box post-box'}>
                            <h3>Искусство</h3>
                        </div>
                    </Link>
                </div>
                <div className={'col-6'}>
                    <Link className={'post-wrapper'} to={`/choice/development`}>
                        <div className={'box post-box'}>
                            <h3>Афиша</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChoiceComponent;