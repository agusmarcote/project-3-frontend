import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './SingleSale.css';

const apiURL = 'http://localhost:8000/api/v1/sales/instrument/'

function SingleSale(){

    const { saleId } = useParams()
    const [sale, setSale] = useState({})

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL + saleId)
            console.log(res.data)
            setSale(res.data)
        }

        apiCall()
    }, [saleId])
    
    return(
        <div>
            <h1>HARMONEY A SPACE FOR MUSICIANS BY <span>MUSICIANS</span></h1>
            
            <div>
                <section>
                    <h1>DETAIL <span>SALE</span></h1>
                    <p>{sale.creator.email}</p>

                    <img src={sale.picture}/>
                   
                    <p>{sale.description}</p>
                    <p>{sale.instruments}</p>
                    <p>{sale.price}€</p>
                    <Link to={`/sales/edit/${sale._id}`}>Edit Sale</Link>
                </section>
            </div>
        </div>
    )   
}

export default SingleSale