import React, { useState } from "react";
import styled from "styled-components";
import './PageEasy.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import background from './assets/background.png';

function transPos(obj){

}
function PageEasy(){
    let [myPos,changeMyPos] = useState(600);
    let [AIPos,changeAIPos] = useState(600);
    const me = React.createElement(
        "img",
        { 
        src: "/image/walk2.png",
        alt: "walk", 
        width: 80,
        style: { 
            position: "absolute",
            top : 0,
            left: myPos, 
            zIndex: 10,
            pointerEvents: "none"
        }
        }
    )
    const AI1 = React.createElement(
        "img",
        { 
        src: "/image/walk3.png",
        alt: "walk", 
        width: 80,
        style: { 
            position: "absolute",
            top : 100,
            left: AIPos, 
            zIndex: 10,
            pointerEvents: "none"
        }
        }
    )
    const AI2 = React.createElement(
        "img",
        { 
        src: "/image/walk4.png",
        alt: "walk", 
        width: 80,
        style: { 
            position: "absolute",
            top : 200,
            left: AIPos, 
            zIndex: 10,
            pointerEvents: "none"
        }
        }
    )
    const AI3 = React.createElement(
        "img",
        { 
        src: "/image/walk5.png",
        alt: "walk", 
        width: 80,
        style: { 
            position: "absolute",
            top : 300,
            left: AIPos, 
            zIndex: 10,
            pointerEvents: "none"
        }
        }
    )
    let timerId = null
    if(AIPos < 1250){
        timerId = setInterval(() => changeAIPos(AIPos + 50), 1000);
    }
    else{
        setTimeout(() => { clearInterval(timerId); changeAIPos(600);});
        me = React.createElement(
            "img",
            { 
            src: "/image/dead2.png",
            alt: "walk", 
            width: 80,
            style: { 
                position: "absolute",
                top : 0,
                left: myPos, 
                zIndex: 10,
                pointerEvents: "none"
            }
            }  
        )
    }
    return(
        <div className = "page-background">
            <div className = "track">
                { me }
                { AI1 }
                { AI2 }
                { AI3 }
            </div>
            <button onClick = {() => { changeMyPos(myPos + 50) }}> Change </button>
        </div>
    );
}


export default PageEasy;