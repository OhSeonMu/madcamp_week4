import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageEasy from "./pages/PageEasy";
import pageNormal from "./pages/PageNormal";
import PageHard from "./pages/PageHard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/PageEasy" element={<PageEasy/>}/>
      <Route path="/PageNormal" element={<pageNormal/>}/>
      <Route path="/PageHard" element={<PageHard/>}/>
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
