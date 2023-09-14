import React from 'react';

const ChoiceComponent = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-6'}>
                    <div className={'box post-box'}>
                        <h3>Развитие</h3>
                    </div>
                </div>
                <div className={'col-6'}>
                    <div className={'box post-box'}>
                        <h3>Спорт</h3>
                    </div>
                </div>
                <div className={'col-6'}>
                    <div className={'box post-box'}>
                        <h3>Искусство</h3>
                    </div>
                </div>
                <div className={'col-6'}>
                    <div className={'box post-box'}>
                        <h3>Афиша</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoiceComponent;