import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './SingleEvent.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const apiEndPoint = "http://localhost:8000/api/v1/events/"
const apiFAV = 'http://localhost:8000/api/v1/favorites/addEvent/'
const apiURL = 'http://localhost:8000/api/v1/favorites/favorites'

const apiURLprofile = "http://localhost:8000/api/v1/users/profile"


function SingleEvent() {
    const { eventId } = useParams()
    const [event, setEvent] = useState([])
    const [favorite, setFavorite] = useState(false)
    const storedToken = localStorage.getItem("authToken");
    const [currentCreator, setCurrentCreator] = useState(false)
    const [teleph, setTeleph] = useState("")
    


    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURLprofile, { headers: { Authorization: `Bearer ${storedToken}` } })
            const userID = res.data._id
            if (event.creator && event.creator._id === userID) {
                setCurrentCreator(true)
            }
        }
        apiCall()
    }, [event, storedToken])

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiEndPoint + eventId)
            setEvent(res.data)
            setTeleph(`https://wa.me/${res.data.creator.telephone}?text=Hi+${res.data.creator.name}.+I+got+your+number+from+Harmoney.+I+am+interested+in+your+event.+May+I+Call+you?`)
        }

        apiCall()
    }, [eventId])

    const favoriteHandler = () => {

        const apiPost = async () => {
            const storedToken = localStorage.getItem("authToken");

            try {
                await axios.post(apiFAV + eventId, {}, { headers: { Authorization: `Bearer ${storedToken}` } })
                const resUser = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` } })

                const userData = resUser.data.favoriteEvent


                const idArr = []

                for (let i = 0; i < userData.length; i++) {
                    idArr.push(userData[i]._id)
                }


                if (idArr.includes(eventId)) {

                    setFavorite(true)

                } else {

                    setFavorite(false)
                }


            } catch (error) {

            }
        }
        apiPost()
    }

    return (

      <div className="cardLink flex " >
        <div className="CardStyle">
            <section>
                <img className="photoCard" src={event.picture} alt="Instrument" />
                
                
                {event.creator && <Link className="cardLink" to={`/profile/${event.creator._id}`}>
                    <div className="userFlex">
                        {event.creator && <img className="userImage" src={event.creator.picture} alt="Creator"/>}
                        <p className="userNameStyle">{event.creator && event.creator.name}</p>
                    </div>
                </Link>}
                <div className="titleFav">
                       <h3 className="textStyle">{event.title}</h3>
                       {favorite ? <FontAwesomeIcon icon ={faStar} onClick={favoriteHandler}>Favorite</FontAwesomeIcon> : <FontAwesomeIcon icon={farStar} onClick={favoriteHandler}>Favorite</FontAwesomeIcon>}
                </div>

                <div>
                    <a className='phoneIcon flexContact' target='_blank' rel="noreferrer" href={teleph}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <p className="icon">WhatsApp</p>
                    </a>
                   </div>


                    <div>
                        <p className="textStyle"><i>{event.description}</i></p>
                        <p className="textStyle">{event.instruments}</p>
                        <p className="spanPrice">{event.price}€</p>
                        <p className="textStyle">{event.typeOfEvent}</p>
                        <img className="logoImageHere" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo" />
                        {currentCreator && <Link className="buttonClassEvent" to={`/events/edit/${event._id}`}>Edit Event</Link>}
                        <br></br>
                        
                    </div>

                </section>
            </div>
        </div>
    )
}




export default SingleEvent;
