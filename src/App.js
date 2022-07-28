import React, {useEffect, useInsertionEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import './Socket/solo-socket.js';
import './Module/give-code-state.js';
import './Module/get-code-state.js';
import { InitSocketConnection, DisconnectSocket,GetCode, GetState} from "./Socket/solo-socket.js";
import { io } from "socket.io-client";
import { Socket } from "socket.io";
// let socket = io('ws://192.249.18.215:80');

function App(){
    // InitSocketConnection();
    // let [easy,seteasy] = useState ("");
    // socket.emit("code", "easy");
    
    // // const normal = GetCode("normal");
    // // const hard = GetCode("hard");
    // socket.on("code", (code)=>{
    //     seteasy(code)
    //     // console.log(easy)
    //     // console.log(`/PageEasy/${easy}`)
    //     // console.log(typeof(easy))
    // });
    // var easy;
    // socket.emit("code", "easy");

    // // const normal = GetCode("normal");
    // // const hard = GetCode("hard");
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
            <Link to = "/PageEasy"> Easy </Link>
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

export default App;
