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
const apiURLprofile = "http://localhost:8000/api/v1/users/profile"





function SingleSale() {
    const storedToken = localStorage.getItem("authToken");
    const [currentCreator, setCurrentCreator] = useState(false)
    const { saleId } = useParams()
    const [sale, setSale] = useState([])
    const [favorite, setFavorite] = useState(false)
    const [teleph, setTeleph] = useState("")


    useEffect(() => {
        const apiCall = async () => {

            const res = await axios.get(apiURLprofile, { headers: { Authorization: `Bearer ${storedToken}` } })
            const userID = res.data._id

            if (sale.creator._id === userID) {
                setCurrentCreator(true)
            }
        }
        apiCall()
    }, [sale])



    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL + saleId)
            setSale(res.data)
            setTeleph(`https://wa.me/${res.data.creator.telephone}?text=Hi+${res.data.creator.name}.+I+got+your+number+from+Harmoney.+I+am+interested+in+buying+your+product.+May+I+Call+you?`)
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

                if (idArr.includes(saleId)) {

                    setFavorite(true)

                } else {

                    setFavorite(false)
                }


            } catch (error) {
              
            }
        }
        apiPost()
    }

    return (
        <div>
            <div className="singleEvent" >
                <section className="CardStyle cardLinkx">
                    <img className="photoCard" src={sale.picture} alt="Instrument" />
                    {sale.creator && <Link className="cardLink" to={`/profile/${sale.creator._id}`}>
                        <div className="userFlex">
                            {sale.creator && <img className="userImage" src={sale.creator.picture} />}
                            <p className="userNameStyle">{sale.creator && sale.creator.name}</p>
                        </div>

                    </Link>}
                    <div>
                    </div>
                    <div className="titleFav">
                        <h3 className="textStyle">{sale.title}</h3>
                        {favorite ? <FontAwesomeIcon icon={faStar} onClick={favoriteHandler}>Favorite</FontAwesomeIcon> : <FontAwesomeIcon icon={farStar} onClick={favoriteHandler}>Favorite</FontAwesomeIcon>}
                    </div>

                    <div>
                    <a className = 'phoneIcon flexContact'  target='_blank' rel="noreferrer"  href={teleph}>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            <p className="icon">WhatsApp</p>
                        </a>
                    </div>

                    <p className="textStyle"><i>{sale.description}</i></p>
                    <p className="textStyle">{sale.instruments}</p>
                    <p className="spanPrice">{sale.price}€</p>
                    <img className="logoDetailPage" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo" />
                    <br></br>

                    <br></br>
                    <br></br>

                    {currentCreator && <Link className="button-class" to={`/sales/edit/${sale._id}`}>Edit Sale</Link>}

                </section>
            </div>
        </div>
    )

}

export default SingleSale