import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


const Transactions=(props)=>{
    return(
        <div className="px-4 py-2">
            <div className="flex items-center">
                <Link onClick={props.history.goBack}>
                    <img className="mr-4 h-4 w-4 rounded-full" src="../../images/back.svg" alt="Back Image"/>                
                </Link>
                <p className="text-lg ">View Transactions</p>
            </div>
            <div class="flex bg-white rounded mt-4 mb-4 px-3 py-3 shadow">
                <img className=" mr-4 h-12 w-12 rounded-full" src="../../images/chun-lo-demon-patreon.jpg" alt="Profile Image"/>                
                <div className="flex flex-col">
                    <h5 className="text-lg ">Manish Karki</h5>
                    <p className="text-gray-600 text-sm">Bought Acer Nitro 5</p>
                    <p className="text-gray-600 text-sm">$900</p>
                </div>
            </div>
            <div class="flex bg-white rounded mt-4 mb-4 px-3 py-3 shadow">
                <img className=" mr-4 h-12 w-12 rounded-full" src="../../images/minimal mountain.png" alt="Profile Image"/>                
                <div className="flex flex-col">
                    <h5 className="text-lg ">Catherine</h5>
                    <p className="text-gray-600 text-sm">Bought Halcyon Shield</p>
                    <p className="text-gray-600 text-sm">$1500</p>
                </div>
            </div>
            <div class="flex bg-white rounded mt-4 mb-4 px-3 py-3 shadow">
                <img className=" mr-4 h-12 w-12 rounded-full" src="../../images/jw.jpg" alt="Profile Image"/>                
                <div className="flex flex-col">
                    <h5 className="text-lg ">Vox</h5>
                    <p className="text-gray-600 text-sm">Bought Reasonance Bounce</p>
                    <p className="text-gray-600 text-sm">$1200</p>
                </div>
            </div>
            <div class="flex bg-white rounded mt-4 mb-4 px-3 py-3 shadow">
                <img className=" mr-4 h-12 w-12 rounded-full" src="../../images/Albedo.jpg" alt="Profile Image"/>                
                <div className="flex flex-col">
                    <h5 className="text-lg">Skye</h5>
                    <p className="text-gray-600 text-sm">Bought Forward Barrage</p>
                    <p className="text-gray-600 text-sm">$2300</p>
                </div>
            </div>
            
        </div>
    )
}

export default Transactions;