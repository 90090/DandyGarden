/*global chrome*/
import React from "react";
import ReactDOM from "react-dom/client";
import PopupApp from "./popupApp";


const page = ReactDOM.createRoot(document.querySelector("#root"));

document.addEventListener('click',function(){
  var btn = document.getElementById('viewGarden');
  btn.addEventListener('click', function() {
    chrome.tabs.create({
      url: 'option.html'
    });
  });
});




page.render(
  <React.StrictMode>
    <PopupApp />
  </React.StrictMode>
);
