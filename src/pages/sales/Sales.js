import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Sales.css';

const apiEndpoint = "http://localhost:8000/api/v1/sales/instrument"


function Sales(){

    const [sales, setSales] = useState([])

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
                    <Link className="cardLink" to={`/sales/${sale._id}`}>
                    <div>
                        <h4>{sale.instruments}</h4>
                        <br></br>
                        {sale.description}
                        <br></br>
                        proce:{sale.price}
                    </div>
                    </Link>

                    )
                })}
        </div>
    )
    
}

export default Sales