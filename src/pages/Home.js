import React from 'react'
import './Home.css';
// import Sales from './sales/Sales';
import { Link } from "react-router-dom";

export default function Home() {
   return (
      <div>
         <h4 className="missionStatement"><span>For Musicians </span>By Musician</h4>
      <div className = "LogoHomeFlex">
         <img className= "LogoImgHome" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
         <h3><span>Har</span>money</h3>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h4 className = "titleHome">Discover our community:</h4>
         <Link className="cardLink flex" to={`/sales`}>
               <div className = "CardStyle">
                  <img className = "photoCard"src="https://beat.com.au/wp-content/uploads/2016/01/macdemarcoianlaidlaw.jpg" alt="instrument"/>
                  <h3 className="textStyle">Used Instruments</h3>
                  <p className='textStyleHome'>Sell or buy used instrumenst. Help us recycle used instrumets by passing down equipment from one another.</p>
                  <p className='textStyleHome'>Find the instruments that fit your needs</p>
                  <p className='textStyleHome'>Sell your used equipment for ots fair value</p>
                  <img className ="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>

               </div>
          </Link>
          <Link className="cardLink flex" to={`/events`}>
               <div className = "CardStyle">
                  <img className = "photoCard"src="https://imageio.forbes.com/specials-images/imageserve/614af094b90e7b76aac40223/0x0.jpg?format=jpg&width=1200" alt="instrument"/>
                  <h3 className="textStyle">Events</h3>
                  <p className='textStyleHome'>Find musicians to play live at your event!.</p>
                  <p className='textStyleHome'>Find venues and people to play with; concerts, parties, gigs, jam and much more..</p>
                  <p className='textStyleHome'>Share your passion with othes and start sharing your talent with the world.</p>
                  <img className ="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>

               </div>
          </Link>
          <Link className="cardLink flex" to={`/classes`}>
               <div className = "CardStyle">
                  <img className = "photoCard"src="https://www.sagemusic.co/wp-content/uploads/2020/02/Individual-Attention-Sage-Music-School.jpg" alt="instrument"/>
                  <h3 className="textStyle">Learn how to play</h3>
                  <p className='textStyleHome'>Find the best music teachers and start learning how to play an instrument or sing!</p>
                  <p className='textStyleHome'>Advertise your lessons to thousands of potential students TODAY!</p>

                  <img className ="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>

               </div>
          </Link>
      </div>
   )
}
