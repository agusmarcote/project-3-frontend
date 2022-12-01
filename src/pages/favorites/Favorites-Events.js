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
                console.log(res.data)
                setUser(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        apiCall()
    }, [])

    return (
        <div>
            {user && user.favoriteEvent.length == 0 && <h1 className="noFav">There are no favorites saved yet</h1>}
            {user && user.favoriteEvent.map((el) => {
                return (
                    <div className="favoriteX">
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

