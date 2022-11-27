import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateSale.css';

const apiURL = "http://localhost:8000/api/v1/sales/instrument"

const instrumentsArr = ['DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']


function CreateSale(){

    const [title, setTitle] = useState('')
    const [city, setCity] = useState('')
    const [price, setPrice] = useState('')
    const [instruments, setInstruments] = useState('')
    const [description, setDescription] = useState('')
    const [picture, setPicture] = useState('')

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

    //NEW CODE

    const submitHandler = (event) => {
        event.preventDefault()

    
        const newSale = {
            title: title,
            city:city,
            price: price,
            instruments: instruments,
            description: description,
            picture: picture
        }
        console.log(newSale)

        const postApi = async () => {
            const storedToken = localStorage.getItem("authToken");//NEED SOMEONE TO EXPLAIN THIA SHIT HERE

            try {
                const res = await axios.post(apiURL, newSale, { headers: { Authorization: `Bearer ${storedToken}` } })
                console.log(res)
                navigate('/Sales')
            } catch (error) {
                console.log(error.response.data)
            } 
        }
        postApi()
    }

    return(
        <div>
            <h1>SELL MY <span>INSTRUMEMT</span></h1>
    
            <form onSubmit={submitHandler}>
                <label>Title</label>
                <input type='text' value={title} onChange={titleHandler}/>
                <br />

                <label>Instruments</label>
                <select onChange={instrumentsHandler}>
                    {instrumentsArr.map((instrument)=> {
                        return (
                            <option value={instrument}>{instrument}</option>
                        )
                    })}
                </select>
                <br />

                <label>Picture</label>
                <input type='text' value={picture} onChange={pictureHandler}/>
                <br />

                <label>Price</label>
                <input type='number' value={price} onChange={priceHandler}/>
                <br />

                <label>Description</label>
                <input type='text' value={description} onChange={descriptionHandler}/>
                <br />

                <label>City</label>
                <input type='text' value={city} onChange={cityHandler}/>
                <br></br>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreateSale