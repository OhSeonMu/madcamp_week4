import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import './PageEasy.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import background from './assets/background.png';
import { InitSocketConnection, GetCodeState } from "../Socket/solo-socket";
import { io } from "socket.io-client";
import useTypingGame from "react-typing-game-hook";

let socket = io('ws://192.249.18.215:80');

function PageHard(props) {
    let [codes,setcode] = useState ("");
    let [currentCode,setcurrentCode] = useState("");

    let [isEnd1, setEnd1] = useState(false);
    let [isEnd2, setEnd2] = useState(false);
    let [isEnd3, setEnd3] = useState(false);
    let [isEnd4, setEnd4] = useState(false);

    let [myPos, changeMyPos] = useState(0);
    let [AIPos, changeAIPos] = useState(0);
    
    const number_ref = useRef(0);
    useEffect(() => {
        let timer = setTimeout(()=>{ 
            const loop = setInterval(() => {
            number_ref.current += 1;
            changeAIPos(number_ref.current*2)
            if (number_ref.current === 50) {
                clearInterval(loop);
                setEnd2(true);
                setEnd3(true);
                setEnd4(true);
                changeAIPos(90);
            }
            }, 1000); }, 
            2000);
        
    }, []);

    const me = React.createElement(
        "img",
        {
            src: "/image/walk2.png",
            alt: "walk",
            width: 80,
            style: {
                position: "relative",
                top: "-5%",
                left: myPos.toString() + "%",
                // zIndex: 10,
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
                position: "relative",
                top: "0%",
                left: AIPos.toString() + "%",
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
                position: "relative",
                top: "5%",
                left: AIPos.toString() + "%",
                // zIndex: 10,
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
                position: "relative",
                top: "5%",
                left: AIPos.toString() + "%",
                // zIndex: 10,
                pointerEvents: "none"
            }
        }
    )
    const deadme = React.createElement(
        "img",
        {
            src: "/image/dead2.png",
            alt: "walk",
            width: 80,
            height: "25%",
            style: {
                position: "relative",
                top: "-5%",
                left: myPos.toString() + "%",
                // zIndex: 10,
                pointerEvents: "none"
            }
        }
    )
    const deadAI1 = React.createElement(
        "img",
        {
            src: "/image/dead3.png",
            alt: "walk",
            width: 80,
            height: "25%",
            style: {
                position: "relative",
                top: "0%",
                left: AIPos.toString() + "%",
                // zIndex: 10,
                pointerEvents: "none"
            }
        }
    )
    const deadAI2 = React.createElement(
        "img",
        {
            src: "/image/dead4.png",
            alt: "walk",
            width: 80,
            height: "25%",
            style: {
                position: "relative",
                left: AIPos.toString() + "%",
                // zIndex: 10,
                pointerEvents: "none"
            }
        }
    )
    const deadAI3 = React.createElement(
        "img",
        {
            src: "/image/dead5.png",
            alt: "walk",
            width: 80,
            height: "25%",
            style: {
                position: "relative",
                left: AIPos.toString() + "%",
                // zIndex: 10,
                pointerEvents: "none"
            }
        }
    )
    if (myPos >= 100) {
        setEnd1(true);
        changeMyPos(90);
        number_ref.current = 49;
    }
    let [codearr,setcodearr] = useState(["waiting"]);
    let [text,setText] = useState(codearr[0]);
    let [index,setIndex] = useState(0);

    function request(){
        InitSocketConnection();
        
        socket.emit("code", "hard");
        
        socket.on("code", (code)=>{
            setcode(code);
            // console.log(codes);
            number_ref.current = 0;
            changeAIPos(0);
            // console.log("codes", codes);
            setcodearr(codes.split("\\n"));
            // for (let codeline in codearr) {
            //     console.log("codeline", codearr[codeline]);
            // }
            setText(codearr[0])
        });
    }
    // text typing zone
    // let text_arr = props.code;
    const {
        states: {
            charsState,
            length,
            currIndex,
            currChar,
            correctChar,
            errorChar,
            phase,
            startTime,
            endTime,
        },
        actions: { insertTyping, resetTyping, deleteTyping },
    } = useTypingGame(text);
    const handleKey = (key) => {
        if (key === "Escape") {
            resetTyping();
        } else if (key === "Backspace") {
            deleteTyping(false);
            setcurrentCode(currentCode.slice(0,-1))
        } else if (key.length === 1) {
            insertTyping(key);
            setcurrentCode(currentCode + key);
        } else if (key === "Enter") {
            console.log('enter pressed');
            //Todo request
            var req = new Object();
            req.origin_code = codes;
            req.code = currentCode;
            console.log(JSON.stringify(req))
            
            socket.emit("code_state", req);
            
            socket.on("code_state", (state)=>{
                if (state * 10 > myPos){
                    setIndex(index + 1)
                    changeMyPos(state*10);
                    setcurrentCode(currentCode + "\\n")
                }
                setText(codearr[index])
                console.log("state",state);
                console.log("text",text);
                console.log("index",index);
            });
            
        }
    };
    // text div 
    
    const divTextZone = React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "Click on the text below and start typing (esc to reset)"
        ),
        React.createElement(
            "div",
            {
                className: "typing-test",
                onKeyDown: (e) => {
                    handleKey(e.key);
                    e.preventDefault();
                },
                tabIndex: 0,
            },
            text.split("").map((char, index) => {
                let state = charsState[index];
                let color = state === 0 ? "black" : state === 1 ? "green" : "red";
                return React.createElement(
                    "span",
                    {
                        key: char + index,
                        style: { color },
                        className: currIndex + 1 === index ? "curr-letter" : "",
                    },
                    char
                );
            })
        ),
        // React.createElement(
        //     "pre",
        //     null,
        //     JSON.stringify(
        //         {
        //             startTime,
        //             endTime,
        //             length,
        //             currIndex,
        //             currChar,
        //             correctChar,
        //             errorChar,
        //             phase,
        //         },
        //         null,
        //         2
        //     )
        // )
    );
    //-- text typing end
    
    return (
        <div className="page-background flex-container">
            <button onClick = { request }> 시작하기 </button>
            <div className="track flex-item">
                {isEnd1 ? (isEnd2 ? (isEnd3 ? (isEnd4 ? (
                    <>
                        {deadme}
                        {deadAI1}
                        {deadAI2}
                        {deadAI3}
                    </>
                ) : (
                    <>
                        {me}
                        {AI1}
                        {AI2}
                        {deadAI3}
                    </>
                )) : (isEnd4 ? (
                    <>
                        {me}
                        {AI1}
                        {deadAI2}
                        {AI3}
                    </>
                ) : (
                    <>
                        {me}
                        {AI1}
                        {deadAI2}
                        {deadAI3}
                    </>
                ))) : (isEnd3 ? (isEnd4 ? (
                    <>
                        {me}
                        {deadAI1}
                        {AI2}
                        {AI3}
                    </>
                ) : (
                    <>
                        {me}
                        {deadAI1}
                        {AI2}
                        {deadAI3}
                    </>
                )) : (isEnd4 ? (
                    <>
                        {me}
                        {deadAI1}
                        {deadAI2}
                        {AI3}
                    </>
                ) : (
                    <>
                        {me}
                        {deadAI1}
                        {deadAI2}
                        {deadAI3}
                    </>
                )))) : (isEnd2 ? (isEnd3 ? (isEnd4 ? (
                    <>
                        {deadme}
                        {AI1}
                        {AI2}
                        {AI3}
                    </>
                ) : (
                    <>
                        {deadme}
                        {deadAI1}
                        {AI2}
                        {AI3}
                    </>
                )) : (isEnd4 ? (
                    <>
                        {deadme}
                        {AI1}
                        {deadAI2}
                        {AI3}
                    </>
                ) : (
                    <>
                        {deadme}
                        {AI1}
                        {deadAI2}
                        {deadAI3}
                    </>
                ))) : (isEnd3 ? (isEnd4 ? (
                    <>
                        {deadme}
                        {deadAI1}
                        {AI2}
                        {AI3}
                    </>
                ) : (
                    <>
                        {deadme}
                        {deadAI1}
                        {deadAI2}
                        {AI3}
                    </>
                )) : (isEnd4 ? (
                    <>
                        {deadme}
                        {deadAI1}
                        {deadAI2}
                        {AI3}
                    </>
                ) : (
                    <>
                        {me}
                        {AI1}
                        {AI2}
                        {AI3}
                    </>
                ))))}
            </div>
            <div className="TypingArea flex-item">
            <div className="list">
                {codearr.map(txt => <p>{txt}</p>)}
            </div>
                {divTextZone}
            </div>
        </div>
    );
}

export default PageHard;