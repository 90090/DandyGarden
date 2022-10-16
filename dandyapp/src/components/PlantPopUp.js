
import React from "react";
import './plantpopup.css';
import cactus from '../assets/img/cactus.png';
import pink from '../assets/img/pink.png';
import sunflower from '../assets/img/sunflower.png';
 
const PlantPopUp = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {/* {props.content} */}
        <div className="store">
            <div>
                <p>You have {props.points} points</p>
            </div>
            <div className="product">
                <p>Cactus</p>
                <p>30 points</p>
                <img src={cactus} alt="cactus" width="100" />
                <button disabled={(props.points < 30 ? true: false)}>Buy</button>
            </div>
            <div className="product">
                <p>Pink Flower</p>
                <p>20 points</p>
                <img src={pink} alt="cactus" width="100" />
                <button disabled={(props.points < 20 ? true: false)}>Buy</button>
            </div>
            <div className="product">
                <p>Sunflower</p>
                <p>60 points</p>
                <img src={sunflower} alt="cactus" width="100" />
                <button disabled={(props.points < 60 ? true: false)}>Buy</button>
            </div>
        </div>
      </div>
    </div>
  );
};
 
export default PlantPopUp;