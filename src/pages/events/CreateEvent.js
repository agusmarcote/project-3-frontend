import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const apiEndPoint = "http://localhost:8000/api/v1/events/create"



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
            address: address,

        }
        const postApi = async () => {
            try {
                const res = await axios.post(apiEndPoint, newEvent)
                navigate('/events')
            } catch (error) {
                console.log(error)
            }
            postApi()
        }}
        return (
            <div>

                <h1>Hey, Jackass!!! </h1>
                <div>
                  
                    <h1>Create a new Event</h1>
                    <form onSubmit={submitHandler}>
                        <label>Title</label>
                        <input type='text' value={title} onChange={titleHandler} />
                        <br />
                        <label>Description</label>
                        <input type='text' value={description} onChange={descriptionHandler} />
                        <br />
                        <label>Date</label>
                        <input type='textarea' value={date} onChange={dateHandler} />
                        <br />
                        <label>Type Of Event</label>
                        <input type='text' value={typeOfEvent} onChange={typeOfEventHandler} />
                        <br />
                        <label>Style</label>
                        <input type='text' value={style} onChange={styleHandler} />
                        <br />
                        <label>Price</label>
                        <input type='number' value={price} onChange={priceHandler} />
                        <br />
                        <label>Instruments</label>
                        <input type='text' value={instruments} onChange={instrumentsHandler} />
                        <br />
                        <label>Phone Number</label>
                        <input type='text' value={phoneNumber} onChange={phoneNumberHandler} />
                        <br />
                        <label>Address</label>
                        <input type='text' value={address} onChange={addressHandler} />
                        <br />
                        <label>Picture</label>
                        <input type='text' value={picture} onChange={pictureHandler} />
                        <br />
                        <button type='submit'>Create</button>
                    </form>
                </div>


            </div>


        )

    }
