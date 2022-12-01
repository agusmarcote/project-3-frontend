import "./Profile.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProfileLinks from "./ProfileLinks";
import ProfileSales from "./ProfileSales";
import ProfileClasses from "./ProfileClasses";
import ProfileEvent from "./ProfileEvent";



const apiURL = "http://localhost:8000/api/v1/users/profile"

function Profile() {
    const storedToken = localStorage.getItem("authToken");
    const [profile, setProfile] = useState({})



    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` } })
            setProfile(res.data)
        }
        apiCall()
    }, [storedToken])



    const [viewLinks, setViewLinks] = useState(true)
    const [viewSales, setViewSales] = useState(false)
    const [viewEvents, setViewEvents] = useState(false)
    const [viewClasses, setViewClasses] = useState(false)

    const statusProfileHandle = () => {
        setViewLinks(true)
        setViewEvents(false)
        setViewClasses(false)
        setViewSales(false)
    }

    const statusSaleseHandle = () => {
        setViewLinks(false)
        setViewEvents(false)
        setViewClasses(false)
        setViewSales(true)
    }

    const statusEventsHandle = () => {
        setViewLinks(false)
        setViewEvents(true)
        setViewClasses(false)
        setViewSales(false)
    }

    const statusClassesHandle = () => {
        setViewLinks(false)
        setViewEvents(false)
        setViewClasses(true)
        setViewSales(false)
    }



    return (
        <div className="profileHeight">
            <div id="profilePicNameRate">
                <h1 className="profileUsername">{profile.username}</h1>
                <img className="profileImage" src={profile.picture} alt="" />
            </div>
            <div className="profileDetails">
                <div className="profileDetailsName">
                    <h3>{profile.name}</h3>
                </div>
                <h6 className="profileDescription">{profile.description}</h6>
                <div className="profileStyleIns">
                    <p>Favorite Style {profile.style}</p>
                    <br></br>
                    <p>Favorite Instrument {profile.instruments}</p>
                </div>

            </div>
            <div className="profileEdit">
                <Link to={`/profile/edit`}>
                    <button>Edit Profile</button>
                </Link>
            </div>
            <div className="profileDescription">

            </div>
            <div>
                <div className="profileButtons">
                    <div className="buttonPresentationCard">
                        <button className="profileButtonsSvg" onClick={statusProfileHandle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 35 35">
                                <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
                            </svg>
                        </button>
                    </div>

                    <div className="buttonViewSales">
                        <button className="profileButtonsSvg" onClick={statusSaleseHandle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 35 35">
                                <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
                            </svg>
                        </button>
                    </div>

                    <div className="buttonViewEvent">
                        <button className="profileButtonsSvg" onClick={statusEventsHandle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 35 35">
                                <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.835 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                            </svg>
                        </button>
                    </div>

                    <div className="buttonViewClasses">
                        <button onClick={statusClassesHandle}>
                            <svg className="profileButtonsSvg" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pen" viewBox="0 0 35 35">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                            </svg>
                        </button>
                    </div>
                </div>
                {viewLinks && <ProfileLinks />}
                {viewSales && <ProfileSales />}
                {viewClasses && <ProfileClasses />}
                {viewEvents && <ProfileEvent />}
            </div>
        </div>
    )
}


export default Profile