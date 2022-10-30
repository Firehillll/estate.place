import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Marketplace from './components/Marketplace';
import Newproperty from './components/Newproperty';
import Profile from './components/Profile';
import Property from './components/Property';
import { chains, providers } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { Web3Button, useAccount, useConnectModal } from '@web3modal/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Marketplace />}/>
        <Route path="/Newproperty" element={<Newproperty />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/Property/:tokenId" element={<Property />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
