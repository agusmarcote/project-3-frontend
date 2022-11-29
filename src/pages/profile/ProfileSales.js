import "./ProfileSales.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const apiURL = "http://localhost:8000/api/v1/users/profile"

function ProfileSales() {
    const storedToken = localStorage.getItem("authToken");
    const [profile, setProfile] = useState({})
    // console.log(profile.presentationCard)


    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` } })
            setProfile(res.data)
             console.log(res.data)
        }
        apiCall()

    }, [])



    return (
        <div className="profileSales">
            Sales

            
            
            {/* {profile.sale.map((id) => (
                    <ul key={profile.sale._id}>
                        <li><a href={`${id}`}>{id}</a></li>
                    </ul>   
                ))}          */}
        </div>
    )
}


export default ProfileSales
