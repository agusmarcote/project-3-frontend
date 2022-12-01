import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Sales.css';
import Searchbar from "../../components/Searchbar";

const apiEndpoint = "http://localhost:8000/api/v1/sales/instrument"


function Sales() {

    const [sales, setSales] = useState([])
    const [filterSales, setFilterSales] = useState([])


    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiEndpoint)
            setSales(res.data)
            setFilterSales(res.data)
        }

        apiCall()
    }, [])

    const searchHandler = (search) => {
        const searchThis = sales.filter((one) =>
            one.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilterSales(searchThis)
    };

    return (
        <div>
            <h1 className="titleCenter">For <span>Sale</span></h1>
            <div className="searchBar">
                <Searchbar onSearch={searchHandler} />
            </div>
            {filterSales.map((sale) => {
                return (
                    <div key={sale._id}>
                        <Link className="cardLink flex" to={`/sales/${sale._id}`}>
                            <div className="CardStyle">
                                <img className="photoCard" src={sale.picture} alt="instrument" />
                                {sale.creator && <div className="cardLink">
                                    <div className="userFlex">
                                        {sale.creator && <img className="userImage" src={sale.creator.picture} alt="User" />}
                                        <p className="userNameStyle">{sale.creator && sale.creator.name}</p>
                                    </div>
                                </div>}
                                <h3 className="textStyle">{sale.title}</h3>
                                <p className="textStyle">{sale.instruments}</p>
                                <p className="textStyle"><i>{sale.description}</i></p>
                                <h4 className="priceStyleLits textStyle">price: <span className="spanPrice">${sale.price}</span></h4>
                                <img className="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo" />
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )

}

export default Sales