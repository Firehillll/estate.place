import Navbar from "./Navbar";
import Properties from "./Properties";
import MarketplaceJSON from "../Marketplace.json";


export default function Community() {

    
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col place-items-center mt-20">
                <div className="md:text-xl font-bold text-white">
                    The Community wallets
                </div>
            </div>            
        </div>
    );
    
    }