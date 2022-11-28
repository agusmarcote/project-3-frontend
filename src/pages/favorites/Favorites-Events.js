import axios from "axios"
import { useState, useEffect } from "react"

const apiURL = 'http://localhost:8000/api/v1/favorites/favorites'

export default function FavoritesEvents() {
    const [user, setUser] = useState(null)
    
    
    useEffect(() => {
        const apiCall = async () => {
            const storedToken = localStorage.getItem("authToken");
            try {
                const res = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` }})
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
            {user && user.favoriteEvent.map((el)=> {
                return (
                    <div>
                        <img src={el.picture} />
                        <h1>{el.title}</h1>
                        <p>{el.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

