import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './SingleClass.css';

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
                    <h1>CLASS <span>DETAILS</span></h1>
                    {/* <p>{sale.creator.email}</p> */}
                    <img className="photoDetails" src={klass.picture} alt="Instrument"/>
                    <h3 className="textStyle">{klass.title}</h3>
                    <p className="textStyle"><i>{klass.description}</i></p>
                    <p className="textStyle">{klass.instruments}</p>
                    <p className="priceStyleLits textStyle">{klass.price}€</p>
                    <p className="textStyle">Level: {klass.level}</p>
                    <Link className = "button-class" to={`/classes/edit/${klass._id}`}>Edit Class</Link>
                    <br></br>
                    <img id ="logoDetailPage" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
            </div>
    )
}