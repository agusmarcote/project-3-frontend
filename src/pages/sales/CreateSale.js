import "./CreateSale.css"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateSale.css';

const apiURL = "http://localhost:8000/api/v1/sales/instrument"

const instrumentsArr = ["-", 'DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
    'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']


function CreateSale() {

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
        

        const postApi = async () => {
            const storedToken = localStorage.getItem("authToken");

            try {
                await axios.post(apiURL, newSale, { headers: { Authorization: `Bearer ${storedToken}` } })
                
                navigate('/Sales')
            } catch (error) {
                
            }
        }
        postApi()
    }

    return (
        <div className="createSale">
            <h3> <span>SELL</span> INSTRUMEN</h3>

            <img className="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo" />

            <form onSubmit={submitHandler}>
                <div className="divFormEditP">
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleHandler} />
                    <br />
                </div>
                <div className="divFormEditP">
                    <label>Picture</label>
                    <input type='text' value={picture} onChange={pictureHandler} />
                    <br />
                </div>
                <div className="divFormEditP">
                    <label>Price</label>
                    <input type='number' value={price} onChange={priceHandler} />
                    <br />
                </div>
                <div className="divFormEditP">
                    <label>Description</label>
                    <input type='text' value={description} onChange={descriptionHandler} />
                    <br />
                </div>
                <div className="divFormEditP">
                    <label>City</label>
                    <input type='text' value={city} onChange={cityHandler} />
                    <br></br>
                </div>
                <div className="divFormEditPCheckBox">
                    <label>Instruments</label>
                    <select onChange={instrumentsHandler}>
                        {instrumentsArr.map((instrument) => {
                            return (
                                <option value={instrument}>{instrument}</option>
                            )
                        })}
                    </select>
                    <br />
                </div>
                <div className="formProfileButton">
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateSale