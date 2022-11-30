import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './SingleEvent.css';

const apiEndPoint = "http://localhost:8000/api/v1/events/"
const apiFAV = 'http://localhost:8000/api/v1/favorites/addEvent/'


function SingleEvent() {
    const { eventId } = useParams()
    const [event, setEvent] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiEndPoint + eventId) 
            console.log(res.data)
            setEvent(res.data)
        }

        apiCall()
    }, [eventId])

    const favoriteHandler = () => {  

        const apiPost = async () => {
            const storedToken = localStorage.getItem("authToken");

            try {
                const res = await axios.post(apiFAV + eventId, {}, { headers: { Authorization: `Bearer ${storedToken}` }})
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        apiPost()
    }

    return (
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
                    <h3 className="textStyle">{event.title}</h3>
                    <div>
                    <a className = 'phoneIcon flexContact' href='https://wa.me/${event.creator.telephone}?text=My+name+is+${event.creator.name}+I+got+your+number+from+Harmoney.+May+I+Call+you?'>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            <p className="icon">WhatsApp</p>  
                    </a>
                    </div>
                    <p className="textStyle"><i>{event.description}</i></p>
                    <p className="textStyle">{event.instruments}</p>
                    <p className="spanPrice">{event.price}€</p>
                    <p className="textStyle">Contact: {event.phoneNumber}</p>
                    <p className="textStyle">Type Of Event: {event.typeOfEvent}</p>
                    <p className="textStyle">{event.date}</p>
                    {/* <Link className = "button-class" to={`/events/edit/${event._id}`}>Edit Event</Link> */}
                    <br></br>
                    <img className ="logoDetailPage" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
                    {/* <button onClick={favoriteHandler}>Favorite</button> */}
                    <br></br>
                    <br></br>
                    <Link className = "button-class" to={`/events/edit/${event._id}`}>Edit Event</Link>
                </section>  
            </div>


    )
}






export default SingleEvent;
