import "./auth.css"
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
   const [user, setUser] = useState({
      username: '',
      email: ''
   })
   const [password, setPassword] = useState('');
   const [passwordControl, setPasswordControl] = useState('');
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

   useEffect(() => {
      if (password !== passwordControl) {
         setErrorMessage("Passwords don't match")
      } else {
         setErrorMessage(undefined)
      }
      // eslint-disable-next-line
   }, [passwordControl])

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user.email)
      try {
         await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, { name: user.username, email: user.email, password });
         navigate('/login');
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
            <div>
               <h1></h1>
            </div>
            <div className="divFormEditP">
               <label>Name</label>
               <input required type="text" name="username" value={user.username} onChange={handleChange} />
               <br></br>
            </div>
            <div className="divFormEditP">
               <label>Email</label>
               <input required type="email" name="email" value={user.email} onChange={handleChange} />
               <br></br>
            </div>
            <div className="divFormEditP">
               <label>Password</label>
               <input required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
               <br></br>
            </div>
            <div className="divFormEditP">
               <label>Repeat the password</label>
               <input required type="password" name="passwordControl" value={passwordControl} onChange={(e) => setPasswordControl(e.target.value)} />
               {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            <div className="formProfileButton">
               <button type="submit">Register</button>
            </div>

            <div className='loginSignup'>
               <h3>Already have an account?
                  
                  <a href="/login">Login!</a>
               </h3>
            </div>


         </form>
      </div>
   )
}
