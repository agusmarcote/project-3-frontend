import axios from "axios"
import { useState, useEffect } from "react"

const apiURL = 'http://localhost:8000/api/v1/favorites/favorites'

export default function Favorites() {
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
            {user && user.favoriteClass.map((el) => {
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