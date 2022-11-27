import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
   const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
   const navigate = useNavigate();
   return (
      <div>
         {user && <p>Hello {user.username}</p>}
         <ul>
            <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/">Home</NavLink></li>
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
