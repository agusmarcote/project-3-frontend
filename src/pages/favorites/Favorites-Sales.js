import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const apiURL = 'http://localhost:8000/api/v1/favorites/favorites'

export default function FavoriteSales() {

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
        
        <div>            
            {user && user.favoriteSale.length === 0 && <div className="noFav">
                <h1>There are no favorites saved yet</h1>
                <img className="favLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo" />
            </div>}
            {user && user.favoriteSale.map((el) => {
                return (
                    <div key={el._id} className="favoriteX">
                        <h2>Favorites<span> Instruments</span></h2>
                        <div className="favoriteClass">
                            <Link to={`/sales/${el._id}`}>
                                <img className="photoCard" src={el.picture} alt="Favorites Sales" />
                                <br />
                                <h1 className="textStyle">{el.title}</h1>
                                <p className="textStyleHome">{el.description}</p>
                                <p className="spanPrice">{el.price}€</p>
                            </Link>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}