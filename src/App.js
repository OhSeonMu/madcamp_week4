import React, {useEffect, useInsertionEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import './Socket/solo-socket.js';
import './Module/give-code-state.js';
import './Module/get-code-state.js';
import { InitSocketConnection, DisconnectSocket, GiveCodeState, GetCodeState} from "./Socket/solo-socket.js";
import { io } from "socket.io-client";


class App extends React.Component {
  /*
  useEffect(()=>{
    console.log("hellow");
    InitSocketConnection();
    Checkconnect();

    var givecode = new GiveCodeState("hellow\nWold", 1);
    console.log(GetCodeState());
    return () => {
      DisconnectSocket();
    }
  },[]);
  */ 
  render() {
    return( 
    <div className = "App-background">
        <img alt = "logo" src= "image/logo.PNG"/>
        <div className = "App-title">
          <div>Let's Start</div>
          <button onClick = {GiveCodeState({
            origin_code : "HellowWorld",
            code :"Hellow",
            state :"10" 
          })}></button>
          <button onClick = {GetCodeState()}></button>
        </div>
        <div className = "box bg-3">
          <button className="button button--wayra button--border-medium 
          button--text-upper button--size-s button--text-thick">
             Normal
          </button>
          <button className="button button--wayra button--border-medium 
          button--text-upper button--size-s button--text-thick">
            <Link to = "/page"> Normal </Link>
          </button>
          <button className="button button--wayra button--border-medium 
          button--text-upper button--size-s button--text-thick">
            <Link to = "/page"> Hard </Link>
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
