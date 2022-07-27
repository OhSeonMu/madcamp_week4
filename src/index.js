import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from "./Page";
import { InitSocketConnection, Checkconnect, DisconnectSocket, GiveCodeState, GetCodeState} from "./Socket/solo-socket.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
//InitSocketConnection();
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="expenses" element={<Page/>}/>
      <Route path="invoices" element={<Page/>}/>
    </Routes>
  </BrowserRouter>
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>
  */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
