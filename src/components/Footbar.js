import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Footbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAnglesLeft} from "@fortawesome/free-solid-svg-icons"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"



// import homeClicked from "https://res.cloudinary.com/dubxspufg/image/upload/v1669625538/home-clicked_ebwzyb.png"
// import profileClicked from "https://res.cloudinary.com/dubxspufg/image/upload/v1669625538/user-clicked_krmsxp.png"
// import goBackArrowClicked from "https://res.cloudinary.com/dubxspufg/image/upload/v1669625538/GoBackArrowClicked_jwccts.png"
// import searchBar from "https://res.cloudinary.com/dubxspufg/image/upload/v1669625538/search_imrwek.png"
// import searchBarClicked from"https://res.cloudinary.com/dubxspufg/image/upload/v1669625538/search-clicked_hebfvr.png"
// import sale from "https://res.cloudinary.com/dubxspufg/image/upload/v1669625538/sale_wvbyqv.png"
// import saleClicked from "https://res.cloudinary.com/dubxspufg/image/upload/v1669625538/sale-clicked_hfqxxz.png"
// import event from "https://res.cloudinary.com/dubxspufg/image/upload/v1669625537/events_mlbixm.png"
// import eventClicked from "https://res.cloudinary.com/dubxspufg/image/upload/v1669625537/events-clicked_c7jlas.png"
// import activityFeed from "https://res.cloudinary.com/dubxspufg/image/upload/v1669625537/activity-feed_gnao5w.png"
// import activityFeedClicked from "https://res.cloudinary.com/dubxspufg/image/upload/v1669625537/activity-feed-clicked_bhkdww.png"
// import back "https://res.cloudinary.com/dubxspufg/image/upload/v1669625538/GoBackArrow_sb51pt.png"



 function Footbar() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div className = "footBarComponents">
          
         <FontAwesomeIcon icon = {faAnglesLeft} onClick={() => navigate(-1)} className="footbar-icons buttonBack"/>
             
             
                <NavLink className={(element) => element.isActive ? 'selected' : 'unSelected'} to="/"><FontAwesomeIcon icon={faHouse} className="footbar-icons"/></NavLink>
                
                
                {isLoggedIn && <NavLink className={(element) => element.isActive ? 'selected' : 'unSelected'} to="/profile"><FontAwesomeIcon icon = {faUser} className="footbar-icons"/></NavLink>}
                
                <div>
                {/* {isLoggedIn && <NavLink className={(element) => element.isActive ? 'selected' : ''} to="/PresentationCard"><img src =  alt="https://res.cloudinary.com/dubxspufg/image/upload/v1669631744/presentation-card_bsfxbz.png"></img></NavLink>} */}
                </div>
        </div>
    )
}
export default Footbar;