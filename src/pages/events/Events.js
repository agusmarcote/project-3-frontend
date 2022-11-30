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
            console.log(res.data)
            setEvents(res.data)
            setFilterEvents(res.data)
        }


        apiCall()
    }, [])

    const searchHandler = (search) => {
        const searchThis = events.filter((one) =>
          one.title.toLowerCase().includes(search.toLowerCase())
        );   console.log(searchThis) 
        setFilterEvents(searchThis)
    };


    return (
        <div className= "singleEvent" >

            <h1>Current Events</h1>
            <div className = "searchBar">
                <Searchbar  onSearch={searchHandler}/>
                </div>
            <ul>
                
                {filterEvents.map((event) => {
                    return (

                        <div key={event._id}>
                        <Link className="cardLink flex" to={`/events/${event._id}`}>
                        <div className = "CardStyle">
                            <img className = "photoCard"src={event.picture} alt="instrument"/>
                            <h3 className="textStyle">{event.title}</h3>
                            <p className="textStyle">{event.instruments}</p>
                            <p className="textStyle"><i>{event.description}</i></p>
                            <h4 className="priceStyleLits textStyle">price: <span className="spanPrice">${event.price}</span></h4>
                            {event.creator &&<Link className="cardLink" to={`/profile/${event.creator._id}`}>
                                             <div className="userFlex">
                                                {event.creator && <img className ="userImage" src={event.creator.picture}/>}
                                                <p className="userNameStyle">{event.creator && event.creator.name}</p>
                                            </div>
                                        </Link>}
                            <img className ="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
                        </div>
                        </Link>
                        </div>
                    )
                })}
            </ul>



        </div>


    )

}



export default Events;

