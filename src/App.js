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

import SingleEvent from './pages/events/SingleEvent';
import Events from './pages/events/Events';
import CreateEvent from './pages/events/CreateEvent'
import EditEvent from './pages/events/EditEvent'


import styled from 'styled-components';
import Modal from './components/Modal';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faBars } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react";

import Favorites from './pages/favorites/Favorites-Classes';
import FavoritesEvents from './pages/favorites/Favorites-Events';
import FavoriteSales from './pages/favorites/Favorites-Sales';


function App() {

   const [modal, setModal]  = useState(false);

   return (
      <div className="App">
         <Toaster />

         <Modal
            state= {modal}
            changeState = {setModal}
         
         >
            <Contenido>
               <Navbar/>
            </Contenido>
         </Modal>

         <h1 onClick={() => setModal(!modal)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
         </h1>       

         <Navbar />
         

         <Routes>
            <Route path="/" element={<Home />} />
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

            <Route path="/favorites-classes" element={<Favorites />} />
            <Route path="/favorites-events" element={<FavoritesEvents />} />
            <Route path="/favorites-sales" element={<FavoriteSales />} />
         </Routes>
         <Footbar/>
      </div>
   );
}

export default App;

const Contenido = styled.div`
   display: flex;
   flex-direction:columns;
   align-items:center;
`;