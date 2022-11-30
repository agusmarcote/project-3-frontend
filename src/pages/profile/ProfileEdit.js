import "./ProfileEdit.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const instrumentsArr = ['DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
    'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']
const styleArr = ["Dance", "Folk", "Bachata", "Rock", "Reggaeton", "Rap", "Flamenco", "Classic", "Tango", "Indie", "Trap", "Pop", "Electronic", "Blues", "Punk", "Jazz", "Techno", "Choir", "Trance",]


const endPoint = "http://localhost:8000/api/v1/users/profile/edit"
const apiURL = "http://localhost:8000/api/v1/users/profile"


function ProfileEdit() {
    const storedToken = localStorage.getItem("authToken");
    const [profile, setProfile] = useState({})


    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [picture, setPicture] = useState("")
    const [telephone, setTelephone] = useState("")
    const [images, setImages] = useState("")
    const [description, setDescription] = useState("")
    const [instruments, setInstruments] = useState("")
    const [style, setStyle] = useState("")


    const navigate = useNavigate()


    const emailHandler = (event) => setEmail(event.target.value)
    const nameHandler = (event) => setName(event.target.value)
    const usernameHandler = (event) => setUsername(event.target.value)
    const pictureHandler = (event) => setPicture(event.target.value)

    const telephoneHandler = (event) => setTelephone(event.target.value)
    const imagesHandler = (event) => setImages(event.target.value)
    const descriptionHandler = (event) => setDescription(event.target.value)
    const instrumentsHandler = (event) => setInstruments(event.target.value)
    const styleHandler = (event) => setStyle(event.target.value)
 


    const submitHandler = (event) => {
        event.preventDefault()


        const newProfile = {
            email: email,
            name: name,
            username: username,
            picture: picture,

            telephone: telephone,
            images: images,
            description: description,
            instruments: instruments,
            style: style,
        }

        console.log(newProfile)

        const postApi = async () => {
            try {
                const res = await axios.put(endPoint, newProfile, { headers: { Authorization: `Bearer ${storedToken}` } })
                console.log(res)
                navigate("/profile")
            } catch (error) {
                console.log(error)
            }
        }

        postApi()

        setEmail("")
        setName("")
        setUsername("")
        setPicture("")
        setTelephone("")
        setImages("")
        setDescription("")
        setInstruments("")
        setStyle("")
    }

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` } })
            setProfile(res.data)
            setEmail(res.data.email)
            setName(res.data.name)
            setUsername(res.data.username)
            setPicture(res.data.picture)
            setTelephone(res.data.telephone)
            setImages("res.data.images")
            setDescription(res.data.description)
            setInstruments(res.data.instruments)
            setStyle(res.data.style)
        }
        apiCall()
    }, [])

    return (
        <div>
            <h1 className="editProfileTitle profileEditHeight">Edit Profile</h1>
            <form className="formEditP" onSubmit={submitHandler}>
                <div className="divFormEditP">
                    <label>Email</label>
                    <input type="text" name='email' placeholder={email} value={email} onChange={emailHandler} />
                    <br />
                </div>
                <div className="divFormEditP">
                    <label>Name</label>
                    <input type="text" name='name' value={name} placeholder={name} onChange={nameHandler} />
                    <br />
                </div>
                <div className="divFormEditP">
                    <label>Username</label>
                    <input type="text" name='username' value={username} placeholder={username} onChange={usernameHandler} />
                    <br />
                </div>
                <div className="divFormEditP">
                    <label>Picture</label>
                    <input type="text" name='picture' placeholder={picture} value={picture} onChange={pictureHandler} />
                    <br />
                </div>
                <div className="divFormEditP">
                    <label>Telephone</label>
                    <input type="text" name='telephone' placeholder={telephone} value={telephone} onChange={telephoneHandler} />
                    <br />
                </div>
                <div className="divFormEditP">
                    <label>Images</label>
                    <input type="text" name='images' placeholder={images} value={images} onChange={imagesHandler} />
                    <br />
                </div>
                <div className="divFormEditP">
                    <label>Description</label>
                    <textarea type="text" rows="5" columns="5" name='description' placeholder={description} value={description} onChange={descriptionHandler}></textarea>
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
                <div className="divFormEditPCheckBox">
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
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}


export default ProfileEdit