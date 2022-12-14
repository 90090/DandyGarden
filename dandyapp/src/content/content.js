
import React from "react";
import ReactDOM from "react-dom/client";
import "../assets/css/common.css";
import CSApp from "./csApp";

// Create Entry Point For React App
const ContentScriptInsertionPoint = document.createElement("div");
ContentScriptInsertionPoint.id = "contentScriptInsertionPoint";

// Add the entry point to dom
document.body.insertBefore(
  ContentScriptInsertionPoint,
  document.body.firstElementChild
);

const root = ReactDOM.createRoot(ContentScriptInsertionPoint);


// Render App in the entry point
root.render(
  <React.StrictMode>
    <button id="timer">Stp0pt</button>
  </React.StrictMode>
);

document.addEventListener('click',function(){
  var btn = document.getElementById('timer');
  btn.addEventListener('click', function() {
    root.render(
      <CSApp/>
    )
  });
});

// Render App in the entry point
root.render(
  <React.StrictMode>
    <div class="timer-btn-div">
      <button id="timer">Start Timer</button>
    </div>
  </React.StrictMode>
);
