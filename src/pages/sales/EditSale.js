import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const apiURL = "http://localhost:8000/api/v1/sales/instrument/"

const instrumentsArr = ["-", 'DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
    'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']

function EditSale() {

    const { saleId } = useParams()

    const [title, setTitle] = useState('')
    const [city, setCity] = useState('')
    const [price, setPrice] = useState('')
    const [instruments, setInstruments] = useState('')
    const [description, setDescription] = useState('')
    const [picture, setPicture] = useState('')

    useEffect(() => {
        const apiFind = async () => {
            const res = await axios.put(apiURL + saleId)
            setTitle(res.data.title)
            setCity(res.data.city)
            setPrice(res.data.price)
            setInstruments(res.data.instruments)
            setDescription(res.data.description)
            setPicture(res.data.picture)
        }
        apiFind()
    }, [saleId])

    const navigate = useNavigate()

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }
    const cityHandler = (event) => {
        setCity(event.target.value)
    }
    const priceHandler = (event) => {
        setPrice(event.target.value)
    }
    const instrumentsHandler = (event) => {
        setInstruments(event.target.value)
    }
    const descriptionHandler = (event) => {
        setDescription(event.target.value)
    }
    const pictureHandler = (event) => {
        setPicture(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault()


        const newSale = {
            title: title,
            city: city,
            price: price,
            instruments: instruments,
            description: description,
            picture: picture
        }
       

        const putApi = async () => {
            const storedToken = localStorage.getItem("authToken");

            try {
                const res = await axios.put(apiURL + saleId, newSale, { headers: { Authorization: `Bearer ${storedToken}` } })
                
                navigate('/Sales')
            } catch (error) {
                
            }
        }
        putApi()
    }

    const deleteHandler = () => {

        const deleteApi = async () => {
            const storedToken = localStorage.getItem("authToken");
            try {
                const res = await axios.delete(apiURL + saleId, { headers: { Authorization: `Bearer ${storedToken}` } })
                navigate('/sales')
            } catch (error) {
               
            }
        }
        deleteApi()
    }


    return (
        <div>
            <h1>EDIT <span>SELL-ITEM</span></h1>
            <form onSubmit={submitHandler}>
                <label>Title</label>
                <input type='text' value={title} onChange={titleHandler} />
                <br />

                <label>Instruments</label>
                <select onChange={instrumentsHandler}>
                    {instrumentsArr.map((instrument) => {
                        return (
                            <option value={instrument}>{instrument}</option>
                        )
                    })}
                </select>
                <br />

                <label>Picture</label>
                <input type='text' value={picture} onChange={pictureHandler} />
                <br />

                <label>Price</label>
                <input type='number' value={price} onChange={priceHandler} />
                <br />

                <label>Description</label>
                <input type='text' value={description} onChange={descriptionHandler} />
                <br />

                <label>City</label>
                <input type='text' value={city} onChange={cityHandler} />
                <br></br>
                <button className="button-class" type='submit'>Edit</button>
                <br></br>
                <br></br>
                <button className="button-class" type='submit' onClick={deleteHandler}>Delete the instrument</button>

            </form>
        </div>
    )

}

export default EditSale