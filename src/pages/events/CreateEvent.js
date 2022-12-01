import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiEndPoint = "http://localhost:8000/api/v1/events/create"

const instrumentsArr = ['-', 'DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
    'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']

const typeOfArr = ["-", "Party", "Concert", "Join a Band", "Hiring a Member", "Jamming"]


const styleArr = ["-","Dance", "Folk", "Bachata", "Rock", "Reggaeton", "Rap", "Flamenco", "Classic", "Tango", "Indie", "Trap", "Pop", "Electronic", "Blues", "Punk", "Jazz", "Techno", "Choir", "Trance"]


export default function CreateEvent() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [typeOfEvent, setTypeOfEvent] = useState('Party')
    const [style, setStyle] = useState('Dance')
    const [price, setPrice] = useState('')
    const [instruments, setInstruments] = useState('DJ')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [picture, setPicture] = useState('')

    const navigate = useNavigate();

    const pictureHandler = (event) => {
        setPicture(event.target.value)
    }

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }
    const descriptionHandler = (event) => {
        setDescription(event.target.value)
    }
    const dateHandler = (event) => {
        setDate(event.target.value)
    }
    const typeOfEventHandler = (event) => {
        setTypeOfEvent(event.target.value)
    }
    const styleHandler = (event) => {
        setStyle(event.target.value)
    }
    const priceHandler = (event) => {
        setPrice(event.target.value)
    }
    const instrumentsHandler = (event) => {
        setInstruments(event.target.value)
    }
    const phoneNumberHandler = (event) => {
        setPhoneNumber(event.target.value)
    }
    const addressHandler = (event) => {
        setAddress(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const newEvent = {
            title: title,
            description: description,
            date: date,
            typeOfEvent: typeOfEvent,
            style: style,
            price: price,
            instruments: instruments,
            picture: picture,
            phoneNumber: phoneNumber,
            address: address
        }
        const postApi = async () => {
            const storedToken = localStorage.getItem("authToken")

            try {
                const res = await axios.post(apiEndPoint, newEvent, { headers: { Authorization: `Bearer ${storedToken}` } })
                navigate('/events')
            } catch (error) {
                console.log(error.response.data)
            }
        }
        postApi()
    }

    return (
            <div className=" singleEvent">
                <h1>Create a new Event</h1>
                <form className="formEditP" onSubmit={submitHandler}>
                    <div className="divFormEditP">
                        <label>Title</label>
                        <input type='text' value={title} onChange={titleHandler} />
                        <br />
                    </div>
                    <div className="divFormEditP">
                        <label>Description</label>
                        <input type='text' value={description} onChange={descriptionHandler} />
                        <br />
                    </div>
                    <div className="divFormEditP">
                        <label>Date</label>
                        <input type='date' value={date} onChange={dateHandler} />
                        <br />
                    </div>
                    
                    <div className="divFormEditP">
                        <label>Price</label>
                        <input type='number' value={price} onChange={priceHandler} />
                        <br />
                    </div>

                    <div className="divFormEditP">
                        <label>Phone Number</label>
                        <input type='text' value={phoneNumber} onChange={phoneNumberHandler} />
                        <br />
                    </div>
                    <div className="divFormEditP">
                        <label>Address</label>
                        <input type='text' value={address} onChange={addressHandler} />
                        <br />
                    </div>
                    <div className="divFormEditP">
                        <label>Picture</label>
                        <input type='text' value={picture} onChange={pictureHandler} />
                        <br />
                    </div>
                    <div className="divFormEditECheckBox">
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
                    <div className="divFormEditECheckBox">
                        <label>Type of </label>
                        <select onChange={typeOfEventHandler}>
                            {typeOfArr.map((type) => {
                                return (
                                    <option value={type}>{type}</option>
                                )
                            })}
                        </select>
                        <br />
                    </div>
                    <div className="divFormEditECheckBox">
                        <label>Style</label>
                        <select onChange={styleHandler}>
                            {styleArr.map((style) => {
                                return (
                                    <option value={style}>{style}</option>
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
