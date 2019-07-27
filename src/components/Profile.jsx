import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


const Profile=(props)=>{
    return(
        <div className="px-4 py-2">
            {/* <h2>Welcome to the Profile Page</h2>
            <p>Manish Karki</p> */}
            <div className="flex items-center">
                <Link onClick={props.history.goBack}>
                    <img className="mr-4 h-4 w-4 rounded-full" src="../../images/back.svg" alt="Back Image"/>                
                </Link>
                <p className="text-lg ">My Profile</p>
            </div>
            <div className="mt-5 flex justify-center items-center">
                <img className="h-20 w-20 shadow rounded-full" src="../../images/chun-lo-demon-patreon.jpg" alt="Profile Image"/>
                <div className="ml-5">
                    <h6>Manish Karki</h6>
                    <p className="text-gray-600">Front-End Web Developer</p>
                </div>
            </div>

        </div>
    )
}

export default Profile;