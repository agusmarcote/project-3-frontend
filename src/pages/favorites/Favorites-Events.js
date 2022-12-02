import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const apiURL = 'http://localhost:8000/api/v1/favorites/favorites'

export default function FavoritesEvents() {
    const [user, setUser] = useState(null)


    useEffect(() => {
        const apiCall = async () => {
            const storedToken = localStorage.getItem("authToken");
            try {
                const res = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` } })
                setUser(res.data)
            } catch (error) {
                
            }
        }
        apiCall()
    }, [])

    return (
        <div className="noFavorites">

            {user && user.favoriteEvent.length === 0 && 
            <div className="noFav">
                <h1>There are no favorites saved yet</h1>
                <br></br>
                <a href="/events"><h2><span>Click to see </span>some events</h2></a>
                <img className="favLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo" />
            </div>}

            {user && user.favoriteEvent.map((el) => {
                return (
                    <div key={el._id} className="favoriteX">
                        <h2>Favorites<span> Events</span></h2>
                        <div className="favoriteClass">
                            <Link to={`/events/${el._id}`}>
                                <img className="photoCard" src={el.picture} alt="Favorites Events" />
                                <br />
                                <h1 className="textStyle">{el.title}</h1>
                                <p className="textStyleHome">{el.description}</p>
                                <p className="spanPrice">{el.price}€</p>
                            </Link>
                        </div>
                    </div>

                )
            })}
        </div >
    )
}

