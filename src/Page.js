import React, {useEffect} from "react";
import styled from "styled-components";
import './Page.css';
import './Socket/solo-socket.js';
import './Module/give-code-state.js';
import './Module/get-code-state.js';
import { InitSocketConnection, Checkconnect, DisconnectSocket, GiveCodeState, GetCodeState} from "./Socket/solo-socket.js";



class Page extends React.Component {
    render(){
        return(
            <div>
                hello
            </div>
        );
    }
}

export default Page;