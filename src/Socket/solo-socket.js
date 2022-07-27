import React from "react";
import socketio, {io} from "socket.io-client";

let socket = io('ws://192.249.18.198:80');


export function InitSocketConnection(){
    console.log(1);
    if (socket) return;
    console.log(2);
    socketio.connect('ws://192.249.18.198:80');
};

/* codestate를 받아오는 함수 */
/* 
arg = {
    "check" // boolean
    "state" // number
}
*/
export function GetCodeState(){
    socket.on("code_state", (arg)=>{
        console.log(arg);
        return arg;
    })
}

/* codestate를 주는 함수 */
/*
arg = {
    "origin_code" // string
    "code" // string
    "state" // number
}
*/
export function GiveCodeState(arg){
    socket.emit("code_state", arg);
    console.log("GiveCodeState");
}

export function GiveLevel(arg){
    socket.emit("code", arg);
}

export function GetCode(){
    socket.on("code", (arg)=>{
        return arg;
    });
}

export function DisconnectSocket(){
    if (socket == null || socket.connected === false) {
        return;
      }
    socket.disconnect();
    socket = undefined;
}



