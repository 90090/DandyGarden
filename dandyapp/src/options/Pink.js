import './options.css';
import pink from '../assets/img/pink.png'
// import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Pink = (props) => {

  return (
    <div className="whole-pink">
        <Draggable>
          {/* <p>{props.text}</p> */}
          <img className="pink-pic" src={pink} alt="pink flower" width="100"></img>
        </Draggable>
    </div>

    );
};


export default Pink;