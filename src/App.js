import logo from './logo.svg';
import house1 from './house1.png';
import house2 from './house2.png';
import './App.css';
import React, { useState } from 'react';
//document.body.style = 'background: rgb(200, 245, 245);';
var buttonTextColor = 'rgb(40, 40, 160)';
const buttonStyle = {height: "30%", width: '15%', textAlign: 'center', color: buttonTextColor}

function App() {
  var [page, setPage] = useState('main');
  var [address, setAddress] = useState('');
  var [balance, setBalance] = useState(0);
  var [connectText, setConnectText] = useState('Connect Wallet')

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
                      <button style={buttonStyle} onClick = {()=>{
                        if (window.ethereum){
                          //mm installed
                          window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
                            setAddress(result[0]);
                            setConnectText('Metamask Connected')
                            //getuserbalance(address)
                          })
                        } else {
                          //Error handling
                        }
                      }}> {connectText} </button>
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
