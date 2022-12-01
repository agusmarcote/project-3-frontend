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

//SALES
import CreateSale from './pages/sales/CreateSale';
import EditSale from './pages/sales/EditSale';
import Sales from './pages/sales/Sales';
import SingleSale from './pages/sales/SingleSale';

//CLASSES
import Classes from './pages/classes/Classes';
import CreateClass from './pages/classes/CreateClass';
import SingleClass from './pages/classes/SingleClass';
import EditClass from './pages/classes/EditClass';

//PROFILE
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';
import ProfileLinks from './pages/profile/ProfileLinks';
import ProfileLinksEdit from './pages/profile/ProfileLinksEdit';
import ProfileByID from './pages/profile/ProfileByID';
import ProfileLinksByID from './pages/profile/ProfileLinksByID';
import ProfileSalesByID from './pages/profile/ProfileSalesByID';
import ProfileEventByID from './pages/profile/ProfileEventByID';
import ProfileClassesByID from './pages/profile/ProfileClassesByID';

//EVENTS
import SingleEvent from './pages/events/SingleEvent';
import Events from './pages/events/Events';
import CreateEvent from './pages/events/CreateEvent'
import EditEvent from './pages/events/EditEvent'

import styled from 'styled-components';
import Modal from './components/Modal';

//REACT
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react"

//FAVORITES
import Favorites from './pages/favorites/Favorites-Classes';
import FavoritesEvents from './pages/favorites/Favorites-Events';
import FavoriteSales from './pages/favorites/Favorites-Sales';
import FavoritesAll from './pages/favorites/Favorites';

function App() {
   const [modal, setModal]  = useState(false);
   const {isLoggedIn} = useContext(AuthContext);


   return (
      <div className="App">
        <Toaster />
         {isLoggedIn &&<Modal
            state= {modal}
            changeState = {setModal}>
            <Content>
               <Navbar />
            </Content>
         </Modal>}

         {isLoggedIn &&<h1 className="navIcon" onClick={() => setModal(!modal)}>
            <svg className="navIcon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 20 20">
               <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
         </h1>}       

         <Routes>
            <Route path="/home" element={<IsPrivate><Home /></IsPrivate>} />
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/private" element={<IsPrivate><PrivateView /></IsPrivate>} />
            <Route path="*" element={<ErrorPage />} />

            <Route path="/events" element={<IsPrivate><Events /></IsPrivate>} />
            <Route path="/create-event" element={<IsPrivate><CreateEvent /></IsPrivate>} />
            <Route path="/events/:eventId" element={<IsPrivate><SingleEvent /></IsPrivate>} />
            <Route path="/events/edit/:eventId" element={<isPrivate><EditEvent /></isPrivate>} />

            <Route path="/sales" element={<IsPrivate><Sales /></IsPrivate>} />
            <Route path="/create-sale" element={<IsPrivate><CreateSale /></IsPrivate>} />
            <Route path="/sales/:saleId" element={<IsPrivate><SingleSale /></IsPrivate>} />
            <Route path="/sales/edit/:saleId" element={<IsPrivate><EditSale /></IsPrivate>} />

            <Route path="/classes" element={<IsPrivate><Classes /></IsPrivate>} />
            <Route path="/create-class" element={<IsPrivate><CreateClass /></IsPrivate>} />
            <Route path="/classes/:classId" element={<IsPrivate><SingleClass /></IsPrivate>} />
            <Route path="/classes/edit/:classId" element={<IsPrivate><EditClass /></IsPrivate>} />
            <Route path="/classes/edit/:classId" element={<IsPrivate><EditClass /></IsPrivate>} /> 

            <Route path="/profile" element={<IsPrivate><Profile /></IsPrivate>} />
            <Route path="/profile/edit" element={<IsPrivate><ProfileEdit /></IsPrivate>} />
            <Route path="/profile/links" element={<IsPrivate><ProfileLinks /></IsPrivate>} />
            <Route path="/profile/links/edit" element={<isPrivate><ProfileLinksEdit/></isPrivate>} />  
            <Route path="/profile/:userId" element={<ProfileByID/>} />
            <Route path="/profile/links/:userId" element={<ProfileLinksByID/>} />
            <Route path="/profile/sales/:userId" element={<ProfileSalesByID/>} />
            <Route path="/profile/event/:userId" element={<ProfileEventByID/>} />
            <Route path="/profile/classes/:userId" element={<ProfileClassesByID/>} />

            <Route path="/favorites-classes" element={<IsPrivate><Favorites /></IsPrivate>} />
            <Route path="/favorites-events" element={<IsPrivate><FavoritesEvents /></IsPrivate>} />
            <Route path="/favorites-sales" element={<IsPrivate><FavoriteSales /></IsPrivate>} />
            <Route path="/favorites" element={<IsPrivate><FavoritesAll/></IsPrivate>} />
         </Routes>
         <br></br>
         {isLoggedIn &&<Footbar/>}
      </div>
   );
}

export default App;

const Content = styled.div`
   display: flex;
   flex-direction:columns;
   align-items:center;
`;