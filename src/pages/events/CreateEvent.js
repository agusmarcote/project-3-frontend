import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiEndPoint = "http://localhost:8000/api/v1/events/"

const instrumentsArr = ['DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
    'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']


const styleArr = ["Dance", "Folk", "Bachata", "Rock", "Reggaeton", "Rap", "Flamenco", "Classic", "Tango", "Indie", "Trap", "Pop", "Electronic", "Blues", "Punk", "Jazz", "Techno", "Choir", "Trance"]

const typeArr = ["Party", "Concert", "Join a Band", "Hiring a Member", "Jamming"]

export default function CreateEvent() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [typeOfEvent, setTypeOfEvent] = useState('')
    const [style, setStyle] = useState('')
    const [price, setPrice] = useState('')
    const [instruments, setInstruments] = useState('')
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
                console.log(error)
            }
        }
        postApi()
    }
    return (
        <div>
            <div>
                <h1>Create a new Event</h1>
                <form onSubmit={submitHandler}>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleHandler} />
                    <br />

                    <label>Description</label>
                    <textarea value={description} onChange={descriptionHandler} />
                    <br />

                    <label>Date</label>
                    <input type='date' value={date} onChange={dateHandler} />
                    <br />

                    <label>Type Of Event</label>
                    <select onChange={typeOfEventHandler}>
                        {typeArr.map((el) => {
                            return (
                                <option value={el}>{el}</option>
                            )
                        })}
                    </select>
                    <br />

                    <label>Style</label>
                    <select onChange={styleHandler}>
                        {styleArr.map((el)=> {
                            return (
                                <option value={el}>{el}</option>
                            )
                        })}
                    </select>
                    <br />

                    <label>Price</label>
                    <input type='number' value={price} onChange={priceHandler} />
                    <br />

                    <label>Address</label>
                    <input type='text' value={address} onChange={instrumentsHandler} />
                    <br />

                    <label>Phone Number</label>
                    <input type='number' value={phoneNumber} onChange={phoneNumberHandler} />
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

                    <button onClick={submitHandler}>Create</button>
                </form>
            </div>


        </div>


    )

}
