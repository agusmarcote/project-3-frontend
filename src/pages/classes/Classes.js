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
                    <Link className="cardLink flex" to={`/classes/${element._id}`}>
                        <div className = "CardStyle">
                            <img className = "photoCard"src={element.picture} alt="instrument"/>
                            <h3 className="textStyle">{element.title}</h3>
                            <p className="textStyle">{element.instruments}</p>
                            <p className="textStyle"><i>{element.description}</i></p>
                            <h4 className="priceStyleLits textStyle">price: <span className="spanPrice">${element.price}</span></h4>
                            {element.creator &&<Link className="cardLink" to={`/profile/${element.creator._id}`}>
                                             <div className="userFlex">
                                                {element.creator && <img className ="userImage" src={element.creator.picture}/>}
                                                <p className="userNameStyle">{element.creator && element.creator.name}</p>
                                            </div>
                                        </Link>}
                            <img className ="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
                        </div>
                    </Link>
                    </div>

                    // <div key={element._id}>
                    //     <h1>{element.title}</h1>
                    //     <img src={element.picture}/>
                    //     <p>{element.description}</p>
                    //     <p>{element.level}</p>
                    //     <p>{element.price}€</p>
                    //     <Link to={`/classes/${element._id}`}>See More</Link>
                    // </div>
                ) 
            })}
        </div>
    )
}
