import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiEndPoint = "http://localhost:8000/api/v1/events/"



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



    return (
        <div>

            <h1>Hello Motherfucker!! This Is Samuel L Jackson</h1>
            <li key={event._id}>
                <img src={event.picture} />
                <h2>{event.title}</h2>,
                <h3>{event.description}</h3>
                <h3>Date: {event.date}</h3>
                <h3>Type Of Event: {event.typeOfEvent}</h3>
                <h3>Style: {event.style}</h3>
                <h3>Price: {event.price}</h3>
                <h3>Job: {event.instruments}</h3>
                <h3>Contact: {event.phoneNumber}</h3>
                <h3>Location: {event.coordinates}</h3>
                
            </li>


        </div>


    )
}






export default SingleEvent;