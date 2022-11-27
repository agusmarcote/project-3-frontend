import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const apiEndPoint = "http://localhost:8000/api/v1/events"

function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiEndPoint)
            console.log(res.data)
            setEvents(res.data)
        }


        apiCall()
    }, [])


    return (
        <div>

            <h1>Current Events</h1>
            <ul>
                {events.map((event) => {
                    return (

                        <div key={event._id}>
                        <Link className="cardLink flex" to={`/events/${event._id}`}>
                        <div className = "CardStyle">
                            <img className = "photoCard"src={event.picture} alt="instrument"/>
                            <h3 className="textStyle">{event.title}</h3>
                            <p className="textStyle">{event.instruments}</p>
                            <p className="textStyle"><i>{event.description}</i></p>
                            <h4 className="priceStyleLits textStyle">price: <span className="spanPrice">${event.price}</span></h4>
                            <img className ="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
                        </div>
                        </Link>
                        </div>

                        // <li key={event._id}>
                        //     <img src={event.picture} />
                        //     <h2>{event.title}</h2>
                        //     <h3>{event.description}</h3>
                        //     <Link to={`/events/${event._id}`}>Details of this event</Link>
                        // </li>
                    )
                })}
            </ul>



        </div>


    )

}



export default Events;

