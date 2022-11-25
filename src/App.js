import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import PrivateView from './pages/PrivateView';
import IsPrivate from './components/IsPrivate';
import CreateSale from './pages/sales/CreateSale';
import EditSale from './pages/sales/EditSale';
import Sales from './pages/sales/Sales';
import SingleSale from './pages/sales/SingleSale';

function App() {
   return (
      <div className="App">
         <Toaster />
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/private" element={<IsPrivate><PrivateView /></IsPrivate>} />
            <Route path="*" element={<ErrorPage />} />
            {/* <Route path="/events" element={<Events />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/events/:eventId" element={<SingleEvent />} />
            <Route path="/events/edit/:eventId" element={<EditEvent />} /> */}
            <Route path="/sales" element={<Sales />} />
            <Route path="/create-sale" element={<CreateSale />} />
            <Route path="/sales/:saleId" element={<SingleSale />} />
            <Route path="/sales/edit/:saleId" element={<EditSale />} />
            {/* <Route path="/classes" element={<Classes />} />
            <Route path="/create-class" element={<CreateClass />} />
            <Route path="/classes/:classId" element={<SingleClass />} />
            <Route path="/classes/edit/:classId" element={<EditClass />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit/:userId" element={<EditProfile />} />
            <Route path="/profile/links" element={<ProfileLinks />} />
            <Route path="/profile/links/edit" element={<ProfileLinksEdit/>} /> */}
         </Routes>
      </div>
   );
}

export default App;
