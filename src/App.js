import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footbar from './components/Footbar';
import ErrorPage from './pages/ErrorPage';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import PrivateView from './pages/PrivateView';
import IsPrivate from './components/IsPrivate';

import CreateSale from './pages/sales/CreateSale';
import EditSale from './pages/sales/EditSale';
import Sales from './pages/sales/Sales';
import SingleSale from './pages/sales/SingleSale';

import Classes from './pages/classes/Classes';
import CreateClass from './pages/classes/CreateClass';
import SingleClass from './pages/classes/SingleClass';
import EditClass from './pages/classes/EditClass';

import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';
import ProfileLinks from './pages/profile/ProfileLinks';
import ProfileLinksEdit from './pages/profile/ProfileLinksEdit';
import ProfileByID from './pages/profile/ProfileByID';
import ProfileLinksByID from './pages/profile/ProfileLinksByID';
import ProfileSalesByID from './pages/profile/ProfileSalesByID';
import ProfileEventByID from './pages/profile/ProfileEventByID';
import ProfileClassesByID from './pages/profile/ProfileClassesByID';


import SingleEvent from './pages/events/SingleEvent';
import Events from './pages/events/Events';
import CreateEvent from './pages/events/CreateEvent'
import EditEvent from './pages/events/EditEvent'


import styled from 'styled-components';
import Modal from './components/Modal';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faBars } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react";

import Favorites from './pages/favorites/Favorites-Classes';
import FavoritesEvents from './pages/favorites/Favorites-Events';
import FavoriteSales from './pages/favorites/Favorites-Sales';
import FavoritesAll from './pages/favorites/Favorites';


function App() {
   const { isLoggedIn, isLoading } = useContext(AuthContext);

   const [modal, setModal]  = useState(false);

   return (
      <div className="App">
        <Toaster />

         {isLoggedIn &&<Modal
            state= {modal}
            changeState = {setModal}
         
         >
            <Content>
               <Navbar/>
            </Content>
         </Modal>}

         <h1 className="navIcon" onClick={() => setModal(!modal)}>
            <svg className="navIcon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 20 20">
               <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
         </h1>       
         <Routes>
            <Route path="/" element={<PrivateView><Home /></PrivateView >} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/private" element={<IsPrivate><PrivateView /></IsPrivate>} />
            <Route path="*" element={<ErrorPage />} />

            <Route path="/events" element={<Events />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/events/:eventId" element={<SingleEvent />} />
            <Route path="/events/edit/:eventId" element={<EditEvent />} />

            <Route path="/sales" element={<Sales />} />
            <Route path="/create-sale" element={<CreateSale />} />
            <Route path="/sales/:saleId" element={<SingleSale />} />
            <Route path="/sales/edit/:saleId" element={<EditSale />} />


            <Route path="/classes" element={<Classes />} />
            <Route path="/create-class" element={<CreateClass />} />
            <Route path="/classes/:classId" element={<SingleClass />} />
            <Route path="/classes/edit/:classId" element={<EditClass />} />

            <Route path="/classes/edit/:classId" element={<EditClass />} /> 
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/profile/links" element={<ProfileLinks />} />
            <Route path="/profile/links/edit" element={<ProfileLinksEdit/>} />  
            <Route path="/profile/:userId" element={<ProfileByID/>} /> 
            <Route path="/profile/links/:userId" element={<ProfileLinksByID/>} /> 
            <Route path="/profile/sales/:userId" element={<ProfileSalesByID/>} /> 
            <Route path="/profile/event/:userId" element={<ProfileEventByID/>} /> 
            <Route path="/profile/classes/:userId" element={<ProfileClassesByID/>} /> 

            <Route path="/favorites-classes" element={<Favorites />} />
            <Route path="/favorites-events" element={<FavoritesEvents />} />
            <Route path="/favorites-sales" element={<FavoriteSales />} />
            <Route path="/favorites" element={<FavoritesAll/>} />
         </Routes>
         <br></br>
         <Footbar/>
      </div>
   );
}

export default App;

const Content = styled.div`
   display: flex;
   flex-direction:columns;
   align-items:center;
`;