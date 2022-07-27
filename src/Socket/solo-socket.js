import React from "react";
import socketio, {io} from "socket.io-client";

let socket = io('ws://192.249.18.215:80');


export function InitSocketConnection(){
    console.log(1);
    if (socket) {
        console.log(3);
        return;
    }
    console.log(2);
    socketio.connect('ws://192.249.18.215:80');
};

/* codestate를 받아오는 함수
input = givecodestate
agivecodestate = {
    "origin_code" // string
    "code" // string
}
output = getcodestate
getcodestate = {
    "state" // number
}
*/
export function GetState(givecodestate){
    socket.emit("code_state", givecodestate);
    return socket.on("code_state", (getcodestate)=>{
        console.log(getcodestate);
        return getcodestate;
    })
}

/*code를 받아오는 함수
input =  Level :: "esay", "normal", "hard"
output = Code
*/

export function GetCode(Level){
    // let result = ""
    socket.emit("code", Level);

    socket.on("code", (code)=>{
        return code;
        // result = code.slice();
        // console.log("11")
        // console.log(result)
        // console.log("11")
    });
    // console.log("22")
    // console.log(result)
    // console.log("22")
    // return result 
}

export function DisconnectSocket(){
    if (socket == null || socket.connected === false) {
        return;
      }
    socket.disconnect();
    socket = undefined;
}

export function Checkconnect(){
    socket.on("connected success", (str)=>{
        console.log(str);
    })
  };