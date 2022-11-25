import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const apiURL = "http://localhost:8000/api/classes"

const instrumentsArr = ['DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']

const levelArr = ['Beginner', 'Intermediate', 'Advanced']

export default function CreateClass() {
    const [title, setTitle] = useState('')
    const [instruments, setInstruments] = useState('')
    const [picture, setPicture] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [coordinates, setCoordinates] = useState('')
    const [level, setLevel] = useState('')

    const navigate = useNavigate()

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const instrumentsHandler = (event) => {
        setInstruments(event.target.value)
    }

    const pictureHandler = (event) => {
        setPicture(event.target.value)
    }
    
    const priceHandler = (event) => {
        setPrice(event.target.value)
    }

    const descriptionHandler = (event) => {
        setDescription(event.target.value)
    }

    const coordinatesHandler = (event) => {
        setCoordinates(event.target.value)
    }

    const levelHandler = (event) => {
        setLevel(event.target.value)
    }
    
    const submitHandler = (event) => {
        event.preventDefault()

    
        const newClasses = {
            title: title,
            instruments: instruments,
            picture: picture,
            price: price,
            description: description,
            level: level
        }
        console.log(newClasses)

        const postApi = async () => {
            const storedToken = localStorage.getItem("authToken");

            try {
                const res = await axios.post(apiURL, newClasses, { headers: { Authorization: `Bearer ${storedToken}` } })
                console.log(res)
                navigate('/classes')
            } catch (error) {
                console.log(error.response.data)
            } 
        }
        postApi()
    }

    return (
        <div>
            <h1>Create a new Class</h1>
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
{/* 
                <label>Address</label>
                <input type='text' value={coordinates} onChange={coordinatesHandler}/>
                <br /> */}

                <label>Level</label>
                <select onChange={levelHandler}>
                    {levelArr.map((lev)=> {
                        return (
                            <option value={lev}>{lev}</option>
                        )
                    })}
                </select>
                <br />
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}