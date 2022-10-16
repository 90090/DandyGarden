/*global chrome*/
import './options.css';
import cactus from '../assets/img/cactus.png'
import pink from '../assets/img/pink.png'
import sunflower from '../assets/img/sunflower.png';
import Pink from './Pink';
import Cactus from './Cactus';
import Sunflower from './Sunflower';
// import Draggable from 'react-draggable';
//import PlantPopUp from '../components/PlantPopUp';
import React, { useState } from 'react';

const OptionsApp = () => {
  
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.complete === "points"){
        setPoints(points + 15)
        
        console.log("Options: point recieved from Timer")
      }
      
    }
  );

  const [pinks, setPinks] = useState([]); 
  function addPink() {  
    setPinks([...pinks, "pink flower"])   
  } 

  const [cactuses, setCactuses] = useState(["cactus"]); 
  function addCactus() {  
    setCactuses([...cactuses, "cactus"])   
  } 

  const [sunflowers, setSunflowers] = useState(["sunflower"]); 
  function addSunflower() {  
    setSunflowers([...sunflowers, "sunflower"])   
  } 

  const [points, setPoints] = useState(30);

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div id="ground" className="ground">
      <div className="top">
        <div className="points">
          <h1>POINTS: {points}</h1>
        </div>
        <div className="dandygarden">
          <h1>DandyGarden</h1>
        </div>
      </div>
        <button onClick={togglePopup} className="add-plant-button"><span>+</span> BUY PLANT</button>
        {/* <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    /> */}
    {isOpen && <PlantPopUp
      // content={<>
      // </>}
      handleClose={togglePopup}
      points={points}
      changePoints={setPoints}
      addPinkPlant={addPink}
      addCactusPlant={addCactus}
      addSunflowerPlant={addSunflower}
    />}
        {cactuses.map((item, i) => ( <Cactus text={item} /> ))} 
        {sunflowers.map((item, i) => ( <Sunflower text={item} /> ))} 
        {pinks.map((item, i) => ( <Pink text={item} /> ))} 
    </div>

    );
};

const PlantPopUp = props => {

  const buyPink = () => {
    props.handleClose();
    props.changePoints(props.points - 20)
    props.addPinkPlant()
  }

  const buyCactus = () => {
    props.handleClose();
    props.changePoints(props.points - 30)
    props.addCactusPlant()
  }

  const buySunflower = () => {
    props.handleClose();
    props.changePoints(props.points - 60)
    props.addSunflowerPlant()
  }

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {/* {props.content} */}
        <h1>Dandy Plant Store</h1>
        <div>
                <p className="popup-description">You have {props.points} points to spend.</p>
            </div>
        <div className="store">
        <div className="product">
                <p  className="flower-name">Pink Flower</p>
                <p className="flower-points">20 points</p>
                <img src={pink} alt="cactus" width="100" />
                <button className="buy-button" onClick={buyPink} disabled={(props.points < 20 ? true: false)}>Buy</button>
            </div>
            <div className="product">
                <p className="flower-name">Cactus</p>
                <p className="flower-points">30 points</p>
                <img src={cactus} alt="cactus" width="100" />
                <button className="buy-button" onClick={buyCactus} disabled={(props.points < 30 ? true: false)}>Buy</button>
            </div>
            <div className="product">
                <p  className="flower-name">Sunflower</p>
                <p className="flower-points">60 points</p>
                <img src={sunflower} alt="cactus" width="100" />
                <button className="buy-button" onClick={buySunflower} disabled={(props.points < 60 ? true: false)}>Buy</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsApp;
