import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const apiURL = "http://localhost:8000/api/v1/events/"

const instrumentsArr = ['DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
    'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']

const typeOfEventArr = ["Party", "Concert", "Join a Band", "Hiring a Member", "Jamming"]

const styleArr = ["Dance", "Folk", "Bachata", "Rock", "Reggaeton", "Rap", "Flamenco", "Classic", "Tango",
    "Indie", "Trap", "Pop", "Electronic", "Blues", "Punk", "Jazz", "Techno", "Choir", "Trance"]


function EditEvent() {
    const { eventId } = useParams()

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

    useEffect(() => {
        const apiFind = async () => {
            const res = await axios.get(apiURL + eventId)
            console.log(res)
            setTitle(res.data.title)
            setDescription(res.data.description)
            setDate(res.data.date)
            setTypeOfEvent(res.data.typeOfEvent)
            setStyle(res.data.style)
            setPrice(res.data.price)
            setInstruments(res.data.instruments)
            setPhoneNumber(res.data.phoneNumber)
            setAddress(res.data.address)
            setPicture(res.data.picture)        
        }
        apiFind()
    }, [eventId])

    const navigate = useNavigate()

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

            const putApi = async () => {
                const storedToken = localStorage.getItem("authToken");

                try {
                    const res = await axios.put(apiURL + eventId, newEvent, { headers: { Authorization: `Bearer ${storedToken}` } })
                    console.log(res)
                    navigate('/events')
                } catch (error) {
                    console.log(error.response.data)
                }
            }
            putApi()
        }

        const deleteHandler = () => {

            const deleteApi = async () => {
                const storedToken = localStorage.getItem("authToken");
                try {
                    const res = await axios.delete(apiURL + eventId, { headers: { Authorization: `Bearer ${storedToken}` } })
                    navigate('/events')
                } catch (error) {
                    console.log(error)
                }
            }
            deleteApi()
        }


        return (
            <div>
                <h1>Edit your Event!</h1>
                <form onSubmit={submitHandler}>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleHandler} />
                    <br />

                    <label>Description</label>
                    <input type='text' value={description} onChange={descriptionHandler} />
                    <br />

                    <label>Date</label>
                    <textarea type='date' value={date} onChange={dateHandler} />
                    <br />

                    <label>Type of Event</label>
                    <select onChange={typeOfEventHandler}>
                        {typeOfEventArr.map((el)=> {
                            return (
                                <option value={el}>{el}</option>
                            )
                        })}
                    </select>
                    <br />
                    
                    <label>Style</label>
                    <select onChange={styleHandler}>
                        {styleArr.map((style) => {
                            return (
                                <option value={style}>{style}</option>
                            )
                        })}
                    </select>
                    <br />

                    <label>Price</label>
                    <input type='number' value={price} onChange={priceHandler} />
                    <br />

                    <label>Address</label>
                    <input type='text' value={address} onChange={addressHandler} />
                    <br />

                    <label>Phone number</label>
                    <input type='text' value={phoneNumber} onChange={phoneNumberHandler} />
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
                    
                    <button type='submit'>Save your edit</button>
                    <button onClick={deleteHandler}>Delete the Event</button>
                </form>
            </div>
        )
    }




export default EditEvent