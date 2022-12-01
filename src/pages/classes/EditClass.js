import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const apiURL = "http://localhost:8000/api/classes/"

const instrumentsArr = ['-', 'DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
    'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']

const levelArr = ['-', 'Beginner', 'Intermediate', 'Advanced']

export default function EditClass() {

    const { classId } = useParams()

    const [title, setTitle] = useState('')
    const [instruments, setInstruments] = useState('')
    const [picture, setPicture] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [level, setLevel] = useState('')

    useEffect(() => {
        const apiFind = async () => {
            const res = await axios.get(apiURL + classId)
            setTitle(res.data.title)
            setInstruments(res.data.instruments)
            setPicture(res.data.picture)
            setPrice(res.data.price)
            setDescription(res.data.description)
            setLevel(res.data.level)
        }
        apiFind()
    }, [classId])

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


        const putApi = async () => {
            const storedToken = localStorage.getItem("authToken");

            try {
                await axios.put(apiURL + classId, newClasses, { headers: { Authorization: `Bearer ${storedToken}` } })

                navigate('/classes')
            } catch (error) {

            }
        }
        putApi()
    }

    const deleteHandler = () => {

        const deleteApi = async () => {
            const storedToken = localStorage.getItem("authToken");
            try {
                await axios.delete(apiURL + classId, { headers: { Authorization: `Bearer ${storedToken}` } })
                navigate('/classes')
            } catch (error) {

            }
        }
        deleteApi()
    }

    return (
        <div  className="createSale">
            <h3> <span>EDIT</span> CLASS</h3>
            <img className="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo" />
            <form className="formEditP" onSubmit={submitHandler}>
            <div className="divFormEditP">
                <label>Title</label>
                <input type='text' value={title} onChange={titleHandler} />
                <br />
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
                <textarea type='text' value={description} rows='15' cols='40' onChange={descriptionHandler} />
                <br />
            </div>
            <div className="divFormEditPCheckBox">
                <label>Level</label>
                <select onChange={levelHandler}>
                    {levelArr.map((lev) => {
                        return (
                            <option value={lev}>{lev}</option>
                        )
                    })}
                </select>
                <br />
            </div>
            <div className="formProfileButton" >
                <button type='submit'>Edit</button>
            </div>
            <div className="formProfileButton" >
                <button onClick={deleteHandler}>Delete</button>
            </div>
            </form>
        </div>
    )
}