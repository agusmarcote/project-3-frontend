import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Sales.css';

const apiEndpoint = "http://localhost:8000/api/v1/sales/instrument"


function Sales(){

    const [sales, setSales] = useState([])
    console.log(sales)

    useEffect(() => {
        const apiCall = async () => {
           const res = await axios.get(apiEndpoint)
           setSales(res.data)
        }
  
        apiCall()
     }, [])

    return(
        <div>
            <h1>FOR <span>SALE</span></h1>
            {sales.map((sale) =>{
                return(
                    <Link className="cardLink flex" to={`/sales/${sale._id}`}>
                    <div className = "CardStyle">
                        <img className = "photoCard"src={sale.picture} alt="instrument"/>
                        <h3 className="textStyle">{sale.title}</h3>
                        {/* {sale.creator &&<Link className="cardLink" to={`/profile/${sale.creator._id}`}>
                                             <div className="userFlex">
                                                {sale.creator && <img className ="userImage" src={sale.creator.picture}/>}
                                                <p>{sale.creator && sale.creator.name}</p>
                                            </div>
                                        </Link>} */}
                        <p className="textStyle">{sale.instruments}</p>
                        <p className="textStyle"><i>{sale.description}</i></p>
                        <h4 className="priceStyleLits textStyle">price: <span className="spanPrice">${sale.price}</span></h4>
                        {sale.creator &&<Link className="cardLink" to={`/profile/${sale.creator._id}`}>
                                             <div className="userFlex">
                                                {sale.creator && <img className ="userImage" src={sale.creator.picture}/>}
                                                <p className="userNameStyle">{sale.creator && sale.creator.name}</p>
                                            </div>
                                        </Link>}
                        <img className ="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
                    </div>
                    </Link>

                    )
                })}
        </div>
    )
    
}

export default Sales