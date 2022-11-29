import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './SingleClass.css';

const apiURL = 'http://localhost:8000/api/classes/'
const apiFAV = 'http://localhost:8000/api/v1/favorites/addClass/'

export default function SingleClass() {
    const { classId } = useParams()
    const [klass, setKlass] = useState({})
    

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL + classId)
            console.log(res.data)
            setKlass(res.data)
        }

        apiCall()
    }, [classId])

    const favoriteHandler = (event) => {  

        const apiPost = async () => {
            const storedToken = localStorage.getItem("authToken");

            try {
                const res = await axios.post(apiFAV + classId, {}, { headers: { Authorization: `Bearer ${storedToken}` }})
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        apiPost()
    }

    return (    
            <div>
                    <h1>CLASS <span>DETAILS</span></h1>
                    {klass.creator &&<Link className="cardLink" to={`/profile/${klass.creator._id}`}>
                                             <div className="userFlex">
                                                {klass.creator && <img className ="userImage" src={klass.creator.picture}/>}
                                                <p className="userNameStyle">{klass.creator && klass.creator.name}</p>
                                            </div>
                                        </Link>}
                    {/* <p>{sale.creator.email}</p> */}
                    <img className="photoDetails" src={klass.picture} alt="Instrument"/>
                    <h3 className="textStyle">{klass.title}</h3>
                    <p className="textStyle"><i>{klass.description}</i></p>
                    <p className="textStyle">{klass.instruments}</p>
                    <p className="priceStyleLits textStyle">{klass.price}€</p>
                    <p className="textStyle">Level: {klass.level}</p>
                    <Link className = "button-class" to={`/classes/edit/${klass._id}`}>Edit Class</Link>
                    <br></br>
                    
                    <button onClick={favoriteHandler}>Favorite</button>
                    <br></br>
                    <img className="logoImageHere" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
            </div>
    )
}