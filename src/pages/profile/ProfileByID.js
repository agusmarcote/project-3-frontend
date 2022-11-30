import "./Profile.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProfileClasses from "./ProfileClasses";
import ProfileEvent from "./ProfileEvent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom"
import ProfileLinksByID from "./ProfileLinksByID";
import ProfileSalesByID from "./ProfileSalesByID";
import ProfileEventByID from "./ProfileEventByID";
import ProfileClassesByID from "./ProfileClassesByID";


const apiURL = "http://localhost:8000/api/v1/users/profile/"

function ProfileByID () {


    const { userId } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL + userId)
            console.log(res.data)
            setUser(res.data)
        }

        apiCall()
    }, [userId])

    const [viewLinks, setViewLinks] = useState(false)
    const [viewSales, setViewSales] = useState(false)
    const [viewEvents, setViewEvents] = useState(false)
    const [viewClasses, setViewClasses] = useState(false)

    return (
            <div>
                    <div id="profilePicNameRate">
                        <h1>{user.name}</h1>
                        <img className="profileImage" src={user.picture} alt="profilePicture" />
                    </div>
                    <div className="profileDescription">
                        <h4>{user.description}</h4>
                    </div>
                    <div className="profileButtons">
                        <div className="buttonPresentationCard">
                            <button onClick={() => setViewLinks(!viewLinks)}>Presentation Card</button>
                        </div>
                    <div className="buttonViewSales">
                        <button onClick={() => setViewSales(!viewSales)}>
                            Sales
                        </button>
                    </div>
                    <div className="buttonViewEvent">
                        <button onClick={() => setViewEvents(!viewEvents)}>
                            Events
                        </button>
                    </div>
                    <div className="buttonViewClasses">
                        <button onClick={() => setViewClasses(!viewClasses)}>
                            Classes
                        </button>
                    </div>
                </div>
                <div className="profileInformation">
                    {viewLinks && <ProfileLinksByID />}
                    {viewSales && <ProfileSalesByID />}
                    {viewEvents && <ProfileEventByID />}
                    {viewClasses && <ProfileClassesByID />}
                </div>
            </div>
    )
}
export default ProfileByID