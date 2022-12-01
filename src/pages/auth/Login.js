import axios from 'axios';
import React, { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
   const { storeToken, authenticateUser } = useContext(AuthContext);
   const [user, setUser] = useState({
      email: '',
      password: ''
   });
   const [errorMessage, setErrorMessage] = useState(undefined);
   const navigate = useNavigate();

   const handleChange = (e) => {
      setUser(prev => {
         return {
            ...prev,
            [e.target.name]: e.target.value
         }
      })
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, user);
         toast.success('Welcome back!')
         storeToken(response.data.authToken);
         authenticateUser();
         navigate('/profile');
      } catch (error) {
         setErrorMessage(error.response.data.error)
      }
   }

   return (
      <div>
         <div className="LogoHomeFlex">
            <img className="LogoImgHome" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo" />
            <h1><span>Har</span>money</h1>
         </div>
         <form onSubmit={handleSubmit}>
            <div className="divFormEditP">
               <label>Email</label>
               <input required type="email" name="email" value={user.email} onChange={handleChange} />
               <br></br>
            </div>
            <div className="divFormEditP">
               <label>Password</label>
               <input required type="password" name="password" value={user.password} onChange={handleChange} />
               {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            <div className="formProfileButton">
               <button type="submit">Log in </button>
            </div>
            <div className='loginSignup'>
               <h3>Don´t have an account? 
                  <a href="/signup">Sign Up!</a>
               </h3>
            </div>

         </form>
      </div>
   )
}
