import React from 'react';
import './Main.scss';
import Latest from './Latest';
import Recomend from './Recomend';
import NewMovie from './NewMovie';


    
   /*  const hidden = () => {
        style: {display: {sct} == 600 ? "none": "block"}
    } */

const Main = () => {
    return (
        <div className='main' >
            <NewMovie/>
            <Latest/>
            <Recomend/>    
        </div>
    );
};

export default Main;