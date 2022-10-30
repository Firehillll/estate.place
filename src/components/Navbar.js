import { Web3Modal } from '@web3modal/react'
import { Web3Button, useAccount, useConnectModal } from '@web3modal/react'
import { chains, providers } from '@web3modal/ethereum'
import { useDisconnect } from '@web3modal/react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';




function Navbar() {

    // mag zo weg
const [connected, toggleConnect] = useState(false);
const location = useLocation();
const [currAddress, updateAddress] = useState('0x');

const { isOpen, open, close } = useConnectModal()
const { account, isReady } = useAccount()
const disconnect = useDisconnect()

// Wallet connect
const { address, isConnected } = useAccount()
var [connectText, setConnectText] = useState('Connect Wallet')

const modalConfig = {
    projectId: "aea7c437e57121b7577af1b36384bd27",
    theme: 'dark',
    accentColor: 'default',
    ethereum: {
      appName: 'web3Modal',
      autoConnect: true,
      chains: [
        chains.goerli,
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


    return (
      <div className="">
        <nav className="w-screen">
          <ul className='flex items-end justify-between py-3 bg-transparent text-white pr-5'>
          <li className='flex items-end ml-5 pb-2'>
            <Link to="/">
            <div className='inline-block font-bold text-xl ml-2'>
              Real Estate  Marketplace
            </div>
            </Link>
          </li>
          <li className='w-2/10'>
            <ul className='lg:flex justify-between font-bold mr-10 text-lg'>
              {location.pathname === "/" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/">Marketplace</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/">Marketplace</Link>
              </li>              
              }
              {location.pathname === "/Newproperty" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/Newproperty">New Property</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/Newproperty">New Property</Link>
              </li>              
              }              
              {location.pathname === "/Profile" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/Profile">Profile</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/Profile">Profile</Link>
              </li>              
              }
              {location.pathname === "/Community" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/Community">Community</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/Community">Community</Link>
              </li>              
              }   
              <li>
                <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
                        onClick = {()=>{
                        if (!account.isConnected)
                          open();
                        else {
                          disconnect();
                        }
                          }}>
                            {account.isConnected?"Disconnect: " +account.address.slice(0,6) : connectText}
                          </button>
                          <Web3Modal config={modalConfig} />
              </li>
            </ul>
          </li>
          </ul>
        </nav>
        <div className='text-white text-bold text-right mr-10 text-sm'>                      
        </div>
      </div>
    );
  }

  export default Navbar;