import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../../components/Searchbar";

const apiEndPoint = "http://localhost:8000/api/v1/events"

function Events() {
    const [events, setEvents] = useState([])
    const [filterEvents, setFilterEvents] = useState([])


    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiEndPoint)

            setEvents(res.data)
            setFilterEvents(res.data)
        }


        apiCall()
    }, [])

    const searchHandler = (search) => {
        const searchThis = events.filter((one) =>
            one.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilterEvents(searchThis)
    };


    return (
        <div>

            <h1 className="titleCenter"><span>Current </span>Events</h1>
            <div className="searchBar">
                <Searchbar onSearch={searchHandler} />
            </div>
            <div>
                {!filterEvents[0] &&
                    <div className="noFav">
                        <h1>There are no events</h1>
                        <a href="/create-event"><h2><span>Create </span>an event</h2></a>
                        <img className="favLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo" />
                    </div>}
                {filterEvents.map((event) => {
                    return (
                        <div key={event._id}>
                            <Link className="cardLink flex" to={`/events/${event._id}`}>
                                <div className="CardStyle">
                                    <img className="photoCard" src={event.picture} alt="instrument" />
                                    {event.creator && <div className="cardLink">
                                        <div className="userFlex">
                                            {event.creator && <img className="userImage" src={event.creator.picture} alt="Creator" />}
                                            <p className="userNameStyle">{event.creator && event.creator.name}</p>
                                        </div>
                                    </div>}
                                    <h3 className="textStyle">{event.title}</h3>
                                    <p className="textStyle">{event.instruments}</p>
                                    <p className="textStyle"><i>{event.description}</i></p>
                                    <h4 className="priceStyleLits textStyle">price: <span className="spanPrice">${event.price}</span></h4>
                                    <img className="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo" />
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>



        </div>


    )

}



export default Events;

