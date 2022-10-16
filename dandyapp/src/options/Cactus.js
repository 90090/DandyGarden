import './options.css';
import cactus from '../assets/img/cactus.png'
// import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Cactus = (props) => {

  return (
    <div className="whole-pink">
        <Draggable>
          {/* <p>{props.text}</p> */}
          <img className="cactus-pic" src={cactus} alt="pink flower" width="100"></img>
        </Draggable>
    </div>

    );
};


export default Cactus;