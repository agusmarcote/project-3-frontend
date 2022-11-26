import "./Profile.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProfileLinks from "./ProfileLinks";
import ProfileLinksEdit from "./ProfileLinksEdit";



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
    }, [])

    return (
        <div>
            <Link to={`/profile/edit`}>
                <button>Edit Profile</button>
            </Link>
            <img src={profile.picture} alt="" />
            <div className="profileNameRate">
                <h1>{profile.name}</h1>
                <h1>{profile.rate}</h1>
            </div>
            <p>{profile.email}</p>
            <p>{profile.username}</p>
            <p>{profile.telephone}</p>
            <p>{profile.style}</p>
            <p>{profile.instruments}</p>
            <h4>{profile.description}</h4>
            <Link to="">Create Presentation Card
                <ProfileLinks />
            </Link>
             
        </div>
    )
}


export default Profile