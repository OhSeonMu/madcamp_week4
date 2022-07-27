import React, {useEffect, useInsertionEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import './Socket/solo-socket.js';
import './Module/give-code-state.js';
import './Module/get-code-state.js';
import { InitSocketConnection, DisconnectSocket,GetCode, GetState} from "./Socket/solo-socket.js";
import { io } from "socket.io-client";
import { Socket } from "socket.io";


class App extends React.Component {
  render() {
    InitSocketConnection();
    const easy = GetCode("easy");
    // const normal = GetCode("normal");
    // const hard = GetCode("hard");
    
    console.log(easy);
    // console.log(normal);
    // console.log(hard);
    
    return( 
    <div className = "App-background">
        <img alt = "logo" src= "image/logo.PNG"/>
        <div className = "App-title">
          <div>Let's Start</div>
        </div>
        <div className = "box bg-3">
          <button className="button button--wayra button--border-medium 
          button--text-upper button--size-s button--text-thick" >
            <Link to = "/PageEasy" > Easy </Link>
          </button>
          <button className="button button--wayra button--border-medium 
          button--text-upper button--size-s button--text-thick">
            <Link to = "/PageNormal" > Normal </Link>
          </button>
          <button className="button button--wayra button--border-medium 
          button--text-upper button--size-s button--text-thick">
            <Link to = "/PageHard"> Hard </Link>
          </button>
        </div>
        <div className = "code">
          <img alt = "logo" src= "image/code.PNG"/>
        </div>
    </div>
    );
  }
}

export default App;
