import './App.css';
import React from 'react';

import { useState, } from "react";
import { chains, providers } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { Web3Button, useAccount, useConnectModal } from '@web3modal/react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Marketplace from './components/Marketplace';
import Newproperty from './components/Newproperty';
import Profile from './components/Profile';
import Property from './components/Property';
import Community from './components/Community';

// import Home from "./walletConnect.js";


//document.body.style = 'background: rgb(200, 245, 245);';
var buttonTextColor = 'rgb(40, 40, 160)';
const buttonStyle = {height: "30%", width: '15%', textAlign: 'center', color: buttonTextColor}

function App() {
  var [page, setPage] = useState('main');
  var [address, setAddress] = useState('');
  var [balance, setBalance] = useState(0);
  var [connectText, setConnectText] = useState('Connect Wallet')


  // const web3Modal = new Web3Modal({
  //   network: "goerli",
  //   theme: "light", // optional, 'dark' / 'light',
  //   cacheProvider: false, // optional
  //   providerOptions: {
  //     binancechainwallet: {
  //       package: true,
  //     },
  //     walletconnect: {
  //       package: true, // required
  //       options: {
  //         infuraId: process.env.INFURA_ID // required
  //     }
  //   },
  //   coinbasewallet: {
  //     package: true, // Required
  //     options: {
  //       appName: "Coinbase", // Required
  //       infuraId: process.env.INFURA_ID, // Required
  //       chainId: 4, //4 for Rinkeby, 1 for mainnet (default)
  //     },
  //   }
  //   } // required
  // });
  const { isOpen, open, close } = useConnectModal()
  const { account, isReady } = useAccount()

  const providerOptions = {
    binancechainwallet: {
      package: true,
    },
    // walletconnect: {
    //   package: WalletConnect, 
    //   options: {
    //     infuraId: process.env.INFURA_ID 
    // }
    // }
  }
  
  const [connectedAccount, setConnectedAccount] = useState("");

  // const connectWeb3Wallet = async () => {
  //   try {
  //     const web3Provider = await Web3Modal.connect();
  //     const library = new ethers.providers.Web3Provider(web3Provider);
  //     const web3Accounts = await library.listAccounts();
  //     const network = await library.getNetwork();
  //     setConnectedAccount(web3Accounts[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return(

  // New line of code

    <div className="container">
        <Routes>
          <Route path="/" element={<Marketplace />}/>
          <Route path="/Newproperty" element={<Newproperty />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Property" element={<Property />}/>
          <Route path="/Community" element={<Community />}/>
        </Routes>
    </div>

  
  );

}

export default App;
