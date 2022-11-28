import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './SingleSale.css';

const apiURL = 'http://localhost:8000/api/v1/sales/instrument/'
const apiFAV = 'http://localhost:8000/api/v1/favorites/addInstrument/'

function SingleSale(){

    const { saleId } = useParams()
    const [sale, setSale] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL + saleId)
            console.log(res.data)
            setSale(res.data)
        }

        apiCall()
    }, [saleId])

    const favoriteHandler = () => {  

        const apiPost = async () => {
            const storedToken = localStorage.getItem("authToken");

            try {
                const res = await axios.post(apiFAV + saleId, {}, { headers: { Authorization: `Bearer ${storedToken}` }})
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        apiPost()
    }
    
    return(
        <div>
            <h4>HARMONEY A SPACE FOR MUSICIANS BY <span>MUSICIANS</span></h4>
            
            <div>
                <section>
                    <h1>DETAIL <span>SALE</span></h1>
                    {/* <p>{sale.creator.email}</p> */}
                    <img className="photoDetails" src={sale.picture} alt="Instrument"/>
                    <h3 className="textStyle">{sale.title}</h3>
                    <p className="textStyle"><i>{sale.description}</i></p>
                    <p className="textStyle">{sale.instruments}</p>
                    <p className="priceStyleLits textStyle">{sale.price}€</p>
                    <Link className = "button-class" to={`/sales/edit/${sale._id}`}>Edit Sale</Link>
                    <br></br>
                    <img className ="logoDetailPage" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
                    <button onClick={favoriteHandler}>Favorite</button>
                </section>
            </div>
        </div>
    )   
}

export default SingleSale