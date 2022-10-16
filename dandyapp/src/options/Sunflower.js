import './options.css';
import sunflower from '../assets/img/sunflower.png'
// import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Sunflower = (props) => {

  return (
    <div className="whole-pink">
        <Draggable>
          {/* <p>{props.text}</p> */}
          <img className="sunflower-pic" src={sunflower} alt="pink flower" width="100"></img>
        </Draggable>
    </div>

    );
};


export default Sunflower;