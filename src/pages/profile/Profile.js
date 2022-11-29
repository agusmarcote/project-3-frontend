import "./Profile.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProfileLinks from "./ProfileLinks";
import ProfileSales from "./ProfileSales";
import ProfileClasses from "./ProfileClasses";
import ProfileEvent from "./ProfileEvent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
// import ProfileLinksEdit from "./ProfileLinksEdit";



const apiURL = "http://localhost:8000/api/v1/users/profile"

function Profile() {
    const storedToken = localStorage.getItem("authToken");
    const [profile, setProfile] = useState({})


    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` } })
            setProfile(res.data)
            // console.log(res.data)
        }
        apiCall()
    }, [])

    const [viewLinks, setViewLinks] = useState(false)
    const [viewSales, setViewSales] = useState(false)
    const [viewEvents, setViewEvents] = useState(false)
    const [viewClasses, setViewClasses] = useState(false)



    return (
        <div>
            <div id="profilePicNameRate">
                <h1>{profile.name}</h1>
                <img className="profileImage" src={profile.picture} alt="" />
                {/* <h1>{profile.rate}</h1> */}
            </div>
            <div className="profileDetails">
                <div className="proUsername"><FontAwesomeIcon icon={faVolumeHigh}><p>{profile.username}</p></FontAwesomeIcon></div>
                <div className="proPhone"><FontAwesomeIcon icon={faPhone} /><p>{profile.telephone}</p></div>
                <p>{profile.style}</p>
                <div className="proInstrument"><FontAwesomeIcon icon={faGuitar}><p>{profile.instruments}</p></FontAwesomeIcon></div>
                <div className="proMail"><FontAwesomeIcon icon={faEnvelope} /><p>{profile.email}</p></div>
            </div>

            <div className="profileEdit">
                <Link to={`/profile/edit`}>
                    <button>Edit Profile</button>
                </Link>
            </div>
            <div className="profileDescription">
                <h4>{profile.description}</h4>
            </div>
            <div>
                <div className="profileButtons">
                    <div className="buttonPresentationCard">
                        <button onClick={() => setViewLinks(!viewLinks)}>
                            Presentation Card
                        </button>
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
                    {viewLinks && <ProfileLinks />}
                    {viewSales && <ProfileSales />}
                    {viewClasses && <ProfileClasses />}
                    {viewEvents && <ProfileEvent />}
                </div>

            </div>

        </div>
    )
}


export default Profile