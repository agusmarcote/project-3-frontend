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

            <h4>HARMONEY A SPACE FOR MUSICIANS BY <span>MUSICIANS</span></h4>

            <div>
                <section>
                    <h1>DETAIL <span>EVENT</span></h1>
                    {/* <p>{sale.creator.email}</p> */}
                    <img className="photoDetails" src={event.picture} alt="Instrument"/>
                    <h3 className="textStyle">{event.title}</h3>
                    <p className="textStyle"><i>{event.description}</i></p>
                    <p className="textStyle">{event.instruments}</p>
                    <p className="priceStyleLits textStyle">{event.price}€</p>
                    <p>Contact: {event.phoneNumber}</p>
                    <p>Type Of Event: {event.typeOfEvent}</p>
                    <p>{event.date}</p>
                    <Link className = "button-class" to={`/events/edit/${event._id}`}>Edit Event</Link>
                    <br></br>
                    <img className ="logoDetailPage" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
                    <button onClick={favoriteHandler}>Favorite</button>
                </section>  
            </div>


        </div>


    )
}






export default SingleEvent;
