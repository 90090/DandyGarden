import './popupApp.css';
import React from 'react';

const PopupApp = () => {
  return (
		<div className='main'>
			<h1 className='main-header'>DandyGarden</h1>
			<li>
				<button>Lock Screen</button>
			</li>
			<li> 
				<button>Choose Timer</button>
			</li>
			<li>
				<button>Task List</button>
			</li>
			<li>
				<button id="viewGarden" >View Garden</button>
			</li>
		</div>
  );
};

export default PopupApp;
