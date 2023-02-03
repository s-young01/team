import React from 'react';
import './Main.scss';
import Latest from './Latest';
import Recomend from './Recomend';

const Main = () => {
    return (
        <div className='main'>
            <Latest/>
            <Recomend/>
        </div>
    );
};

export default Main;