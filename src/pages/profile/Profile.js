import "./Profile.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const apiURL = "http://localhost:8000/api/v1/users/profile"

function Profile() {
    const storedToken = localStorage.getItem("authToken");
    const [profile, setProfile] = useState({})


    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` } })
            setProfile(res.data)
            console.log(res.data)
        }
        apiCall()
    },[])

    return (
        <div>
            <Link to={`/profile/edit`}>
                <button>Edit Profile</button>
            </Link>
            <img src={profile.picture} alt="" />
            <h1>{profile.name}</h1>
            <p>{profile.email}</p>
            <h4>{profile.description}</h4>
        </div>
    )
}


export default Profile