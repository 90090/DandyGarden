/*global chrome*/
import React from "react";
import ReactDOM from "react-dom/client";
import PopupApp from "./popupApp";

const root = ReactDOM.createRoot(document.querySelector("#root"));

document.addEventListener('click',function(){
  var btn = document.getElementById('button');
  btn.addEventListener('click', function() {
    chrome.tabs.create({
      url: 'option.html'
    });
  });
});


root.render(
  <React.StrictMode>
    <PopupApp />
  </React.StrictMode>
);
