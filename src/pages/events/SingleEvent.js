import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './SingleEvent.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../context/AuthContext";

const apiEndPoint = "http://localhost:8000/api/v1/events/"
const apiFAV = 'http://localhost:8000/api/v1/favorites/addEvent/'
const apiURL = 'http://localhost:8000/api/v1/favorites/favorites'


function SingleEvent() {
    const { eventId } = useParams()
    const [event, setEvent] = useState([])
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiEndPoint + eventId) 
            setEvent(res.data)
        }

        apiCall()
    }, [eventId])

    const favoriteHandler = () => {  

        const apiPost = async () => {
            const storedToken = localStorage.getItem("authToken");

            try {
                const res = await axios.post(apiFAV + eventId, {}, { headers: { Authorization: `Bearer ${storedToken}` }})
                const resUser = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` }})
                
                const userData = resUser.data.favoriteEvent
                console.log(userData)
                
                const idArr = []

                for (let i = 0; i < userData.length; i++) {
                    idArr.push(userData[i]._id)
                }
                console.log(idArr)

                if (idArr.includes(eventId)) {
                    console.log('inside')
                    setFavorite(true)
                    console.log(favorite)
                } else {
                    console.log('outside')
                    setFavorite(false)
                }
               
            
            } catch (error) {
                console.log(error)
            }
        }
        apiPost()
    }

    return (
        <div>

            <h4>HARMONEY A SPACE FOR MUSICIANS BY <span>MUSICIANS</span></h4>

            <div>
                <section>
                    {/* <h1>DETAIL <span>EVENT</span></h1> */}
                    {event.creator &&<Link className="cardLink" to={`/profile/${event.creator._id}`}>
                                             <div className="userFlex">
                                                {event.creator && <img className ="userImage" src={event.creator.picture}/>}
                                                <p className="userNameStyle">{event.creator && event.creator.name}</p>
                                            </div>
                                        </Link>}
                    {/* <p>{sale.creator.email}</p> */}
                    <img className="photoDetails" src={event.picture} alt="Instrument"/>
                    <div className="titleFav">
                       <h3 className="textStyle">{event.title}</h3>
                       {favorite ? <FontAwesomeIcon icon ={faStar} onClick={favoriteHandler}>Favorite</FontAwesomeIcon> : <FontAwesomeIcon icon={farStar} onClick={favoriteHandler}>Favorite</FontAwesomeIcon>} 
                    </div>
                    <p className="textStyle"><i>{event.description}</i></p>
                    <p className="textStyle">{event.instruments}</p>
                    <p className="priceStyleLits textStyle">{event.price}€</p>
                    <p>Contact: {event.phoneNumber}</p>
                    <p>Type Of Event: {event.typeOfEvent}</p>
                    <p>{event.date}</p>
                    <Link className = "button-class" to={`/events/edit/${event._id}`}>Edit Event</Link>
                    <br></br>
                    <img className ="logoDetailPage" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>    
                </section>  
            </div>


        </div>


    )
}




export default SingleEvent;
