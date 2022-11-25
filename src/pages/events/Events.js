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
                        <li key={event._id}>
                            <img src={event.picture} />
                            <h2>{event.title}</h2>
                            <h3>{event.description}</h3>
                            <Link to={`/events/${event._id}`}>Details of this event</Link>
                        </li>
                    )
                })}
            </ul>



        </div>


    )

}



export default Events;