import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Robots from './Robots';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Arr from './Arr';

var n=Arr.length;

ReactDOM.render(
  <React.StrictMode>
    
    <div>
    <h>
      <Robots/>
       {/* <Robots /> */}
      </h> 
    </div>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();