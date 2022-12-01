import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";

const apiURL = "http://localhost:8000/api/v1/users/profile"

function Instruments(){
    const storedToken = localStorage.getItem("authToken");
    const [profile, setProfile] = useState()

    return(
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default Instruments