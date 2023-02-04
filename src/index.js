import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

let currDate=new Date().toLocaleDateString()
let currTime=new Date().toLocaleTimeString()


ReactDOM.render(
  <>
   <div className="maindiv">
    <h1>Current Date and Time</h1>
    <h2>Today Date is:{currDate}</h2>
    <h2>Time is : {currTime}</h2>
    </div> 
  </>,
  document.getElementById("root")
)