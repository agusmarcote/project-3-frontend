import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";

const apiURL = "http://localhost:8000/api/v1/users/profile"

function Instruments(){
    const storedToken = localStorage.getItem("authToken");
    const [profile, setProfile] = useState()

    // useEffect(() => {
    //     const apiCall = async () => {
    //         const res = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` } })
    //         setProfile(res.data)
    //         console.log(res.data)
    //     }
    //     apiCall()
    // }, [])

    // console.log("fdf")
    //         console.log(profile.instruments[0])





    // let instrument
    // if (profile.instruments[0] === 'Drums'){
    //     instrument = <div className="proInstrument"><FontAwesomeIcon icon={faGuitar}><p>{profile.instruments}</p></FontAwesomeIcon></div>
    // } else if (profile.instruments[0] === 'Guitar'){
    //     instrument =  <h1>Bye</h1>
    // }

    return(
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default Instruments