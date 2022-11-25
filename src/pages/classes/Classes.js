import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const apiURL = 'http://localhost:8000/api/classes'

export default function Classes() {
    const [classes, setClasses] = useState([])
    
    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL)
            console.log(res.data)
            setClasses(res.data)
        }
        
        apiCall()
    }, [])
    
    return (
        <div>
            <h1>Classes List</h1>
            {classes.map((element) => {
                return (
                    <div key={element._id}>
                        <h1>{element.title}</h1>
                        <img src={element.picture}/>
                        <p>{element.description}</p>
                        <p>{element.level}</p>
                        <p>{element.price}€</p>
                        <Link to={`/classes/${element._id}`}>See More</Link>
                    </div>
                ) 
            })}
        </div>
    )
}
