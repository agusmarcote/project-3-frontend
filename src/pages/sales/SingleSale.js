import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './SingleSale.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const apiURL = 'http://localhost:8000/api/v1/sales/instrument/'
const apiFAV = 'http://localhost:8000/api/v1/favorites/addInstrument/'
const apifavo = 'http://localhost:8000/api/v1/favorites/favorites'

function SingleSale(){

    const { saleId } = useParams()
    const [sale, setSale] = useState([])
    const [favorite, setFavorite] = useState(false)

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
                const resUser = await axios.get(apifavo, { headers: { Authorization: `Bearer ${storedToken}` }})

                const userData = resUser.data.favoriteSale

                const idArr = []
                for (let i = 0; i < userData.length; i++) {
                    idArr.push(userData[i]._id)
                }
                console.log(idArr)

                if (idArr.includes(saleId)) {
                    setFavorite(true)
                } else {
                    setFavorite(false)
                }

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
                    {/* <h1>DETAIL <span>SALE</span></h1> */}
                    {sale.creator &&<Link className="cardLink" to={`/profile/${sale.creator._id}`}>
                    <div className="userFlex">
                        {sale.creator && <img className ="userImage" src={sale.creator.picture}/>}
                        <p className="userNameStyle">{sale.creator && sale.creator.name}</p>
                    </div>
                    </Link>}

                    <img className="photoDetails" src={sale.picture} alt="Instrument"/>
                    <div className="titleFav">
                      <h3 className="textStyle">{sale.title}</h3>
                      {favorite ? <FontAwesomeIcon icon ={faStar} onClick={favoriteHandler}>Favorite</FontAwesomeIcon> : <FontAwesomeIcon icon={farStar} onClick={favoriteHandler}>Favorite</FontAwesomeIcon>}
                    </div>
                    

                    <p className="textStyle"><i>{sale.description}</i></p>
                    <p className="textStyle">{sale.instruments}</p>
                    <p className="priceStyleLits textStyle">{sale.price}€</p>
                    <Link className = "button-class" to={`/sales/edit/${sale._id}`}>Edit Sale</Link>
                    <br></br>
                    <img className ="logoDetailPage" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
                </section>
            </div>
        </div>
    )   
}

export default SingleSale