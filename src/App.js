import logo from './logo.svg';
import house1 from './house1.png';
import house2 from './house2.png';
import './App.css';
import React from 'react';

import { ethers } from "ethers";
import { useState, } from "react";
import { chains, providers } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { Web3Button, useAccount, useConnectModal } from '@web3modal/react'


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

  const modalConfig = {
    projectId: "aea7c437e57121b7577af1b36384bd27",
    theme: 'dark',
    accentColor: 'default',
    ethereum: {
      appName: 'web3Modal',
      autoConnect: true,
      chains: [
        chains.mainnet,
        chains.avalanche,
        chains.polygon,
        chains.binanceSmartChain,
        chains.fantom,
        chains.arbitrum,
        chains.optimism
      ],
      providers: [providers.walletConnectProvider({ projectId: "aea7c437e57121b7577af1b36384bd27" })]
    }
  }

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
  <div>
        {
            page==='main' ?(
              <div style ={{height: "100vh",backgroundImage: "url(/bgimage.png)", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}> 
                  <div className='Header Bar' 
                  style={{
                  width: '100%',
                  height: '10vh',
                  backgroundColor: 'transparent',
                  textAlign: 'center',
                  }}>
                    <span style={{color: 'cyan'}}>Header Bar</span>
                  </div>
                  
                  <div className='Sections Bar'
                  style={{
                  width: '100%',
                  height: '15vh',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'flex-start'
                  }}>

                    <div className='fillerLeft' style={{width: '5%', height: "100%", backgroundColor: 'transparent', display: "flex"}}></div>
                    <img src={logo} className="App-logo" alt="logo" style = {{width: '25%', height: '10vh'}}/>
                    <div className='fillerLeft2' style={{width: '35%', height: "100%", backgroundColor: 'transparent', display: "flex"}}>.</div>
                    <div className='Sections' style={{marginLeft: '0.5%', marginRight: '0.5%', width: '30%', height: "100%", backgroundColor: 'transparent', display: "flex", flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <button style={buttonStyle} onClick = {()=> setPage('marketplace')}> Marketplace </button>
                      <button style={buttonStyle} onClick = {()=> setPage('listProperty')}> List Property </button>
                      <button style={buttonStyle} onClick = {()=> setPage('community')}> Community </button>
                      { <button style={buttonStyle} onClick = {()=>{
                        if (!account.isConnected)
                          open();

                      //  if (isOpen) {
                      //   close();
                      //  } else {
                      //   open();
                      //  }
                      }
                        //()=>{
                        // connectWeb3Wallet();
                        //  if (window.ethereum){
                        //    //mm installed
                        //   window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
                        //      setAddress(result[0]);
                        //      setConnectText('Metamask Connected')
                        //      //getuserbalance(address)
                        //    })
                        //  } else {
                        //    //Error handling
                        //  }
                      // }
                      }> {account.isConnected?"Disconnect: " +account.address.slice(0,6) : connectText} </button> }
                      <Web3Modal config={modalConfig} />
                      {address === '' ? <div> </div> : <button style={buttonStyle} onClick = {()=> setPage('properties')}> My Properties </button>}
                    </div>
                    <div className='fillerRight' style={{width: '5%', height: "100%", backgroundColor: 'transparent', display: "flex"}}> </div>
                  </div>
                  <div style = {{width: "40%", height: "100%", backgroundColor: "transparent",
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'flex-start'}}>
                    <div style = {{width: "20%", height: "100%", backgroundColor: "transparent", marginLeft: "5%", marginRight: "2%", marginTop: "7.5%",
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'flex-start'}}>
                      <img src={house1} className="house" alt="house" style = {{marginTop: "3%", width: '100%', height: '20%'}}/>
                      <img src={house2} className="house" alt="house" style = {{marginTop: "3%", width: '100%', height: '20%'}}/>
                      <img src={house1} className="house" alt="house" style = {{marginTop: "3%", width: '100%', height: '20%'}}/>
                      {/* <div style ={{ flex: 1, display: "flex", width: "100%", backgroundImage: "url(/bgimage.png)", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}> </div> */}
                    </div>
                    <div style = {{width: "20%", height: "100%", backgroundColor: "transparent", marginLeft: "5%", marginRight: "2%", marginTop: "7.5%",
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'flex-start'}}>
                      <img src={house2} className="house" alt="house" style = {{marginTop: "3%", width: '100%', height: '20%'}}/>
                      <img src={house1} className="house" alt="house" style = {{marginTop: "3%", width: '100%', height: '20%'}}/>
                      <img src={house2} className="house" alt="house" style = {{marginTop: "3%", width: '100%', height: '20%'}}/>
                    </div>
                  </div>

              </div>
              )
            : page==='marketplace'?
              <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                Marketplace
              </div>
            : page==='listProperty'?
              <div>
                List Property
              </div>
            : page==='community'?
              <div>
                Login
              </div>
            : page==='properties'?
              <div>
                My properties
              </div>
            :
            <div>
              Error
            </div>
        } 
  </div>
  );

}

export default App;
