import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from "axios";
import { useEffect, useState } from "react"
import "./Navbar.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const apiURL = "http://localhost:8000/api/v1/users/profile"

export default function Navbar() {
   const storedToken = localStorage.getItem("authToken");
   const [profile, setProfile] = useState({})

   useEffect(() => {
      const apiCall = async () => {
          const res = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` } })
          setProfile(res.data)
          console.log(res.data)
      }
      apiCall()
  }, [])

   const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
   const navigate = useNavigate();

   return (
      <div>
      
        <img className="navImage" src={profile.picture} alt="userPhoto"/>
        {/* <p>{user.email}</p> */}
        {/* <p>{profile.name}</p> */}
     

         <ul className='linkStyle'>
            <li><NavLink  className={(element) => element.isActive ? 'selected' : ''} linkStyle to="/">Home</NavLink></li>
            {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/signup">Sign up</NavLink></li>}
            {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/login">Login</NavLink></li>}
            {isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/private">Private view</NavLink></li>}
            {isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/profile">Profile</NavLink></li>}
            {isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/sales">Instruments for slae</NavLink></li>}
            {isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/create-sale">Sell My Instrument</NavLink></li>}
            {isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/events">See Events</NavLink></li>}
            {isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/create-event">Create Event</NavLink></li>}
            {isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/classes">See Classes</NavLink></li>}
            {isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/create-class">Create Class</NavLink></li>}
            {isLoggedIn && <li><button onClick={() => logOutUser()}>Log out</button></li>}
            <li><button onClick={() => navigate(-1)}>Go back</button></li>
         </ul>
      </div>
   )
}
