import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Footbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"





function Footbar() {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div className="footBarComponents">

            <FontAwesomeIcon icon={faAnglesLeft} onClick={() => navigate(-1)} className="footbar-icons buttonBack" />


            <NavLink className={(element) => element.isActive ? 'selected' : 'unSelected'} to="/home"><FontAwesomeIcon icon={faHouse} className="footbar-icons" /></NavLink>


            {isLoggedIn && <NavLink className={(element) => element.isActive ? 'selected' : 'unSelected'} to="/profile"><FontAwesomeIcon icon={faUser} className="footbar-icons" /></NavLink>}


            {isLoggedIn && <NavLink className={(element) => element.isActive ? 'selected' : 'unSelected'} to="/profile/links"><FontAwesomeIcon icon={faAddressCard} /></NavLink>}

        </div>
    )
}
export default Footbar;