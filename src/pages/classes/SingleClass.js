import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const apiURL = 'http://localhost:8000/api/classes/'

export default function SingleClass() {
    const { classId } = useParams()
    const [klass, setKlass] = useState({})
    

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL + classId)
            console.log(res.data)
            setKlass(res.data)
        }

        apiCall()
    }, [classId])
    return (
        <div>
            <h1>Class Details</h1>
            <div>
                <section>
                    <h1>{klass.title}</h1>
                    <img src={klass.picture}/>
                    <p>{klass.description}</p>
                    <p>{klass.instruments}</p>
                    <p>{klass.level}</p>
                    <p>{klass.price}€</p>
                    <Link to={`/classes/edit/${klass._id}`}>Edit Class</Link>
                </section>
            </div>
        </div>
    )
}