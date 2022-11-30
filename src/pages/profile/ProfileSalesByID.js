import "./ProfileLinks.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const apiURL = "http://localhost:8000/api/v1/users/profile/"

function ProfileSalesByID() {

    const { userId } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL + userId)
            console.log(res.data)
            setUser(res.data)
        }
        apiCall()
    }, [userId])

    return (
        <div className="profileSales profileSalesHeight">
                {user.sale && user.sale.map((pro) => {
                    console.log(pro)
                    return (
                        <div key={pro._id}>
                            <Link className="cardLink flex" to={`/sales/${pro._id}`}>
                                <div className="CardStyle">
                                    <img className="photoCard" src={pro.picture} alt="instrument" />
                                    <h3 className="textStyle">{pro.title}</h3>
                                    <p className="textStyle">{pro.instruments}</p>
                                    <p className="textStyle"><i>{pro.description}</i></p>
                                    <h4 className="priceStyleLits textStyle">price: <span className="spanPrice">${pro.price}</span></h4>
                                    <img className="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo" />
                                </div>
                            </Link>
                        </div>
                    )   
                })}
        </div>
    )
}


export default ProfileSalesByID
