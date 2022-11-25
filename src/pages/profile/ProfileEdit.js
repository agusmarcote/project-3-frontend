import "./ProfileEdit.css"
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const instrumentsArr = ['DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']


const endPoint = "http://localhost:8000/api/v1/users/profile/edit"


function ProfileEdit(){
    


    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [picture, setPicture] = useState("")
    const [presentationcard, setPresentationCard] = useState("")
    const [telephone, setTelephone] = useState("")
    const [images, setImages] = useState("")
    const [description, setDescription] = useState("")
    const [instruments, setInstruments] = useState("")
    const [style, setStyle] = useState("")
    // const [favoriteSale, setFavoriteSale] = useState("")
    // const [favoriteEvent, setFavoriteEvent] = useState("")
    // const [favoriteClass, setFavoriteClass] = useState("")
    // const [sale, setSale] = useState("")
    // const [event, setEvent] = useState("")
    // const [classes, setClasses] = useState("")

    const navigate = useNavigate()


    const emailHandler = (event) => setEmail(event.target.value)
    const nameHandler = (event) => setName(event.target.value)
    const usernameHandler = (event) => setUsername(event.target.value)
    const pictureHandler = (event) => setPicture(event.target.value)
    const presentationCardHandler = (event) => setPresentationCard(event.target.value)
    const telephoneHandler = (event) => setTelephone(event.target.value)
    const imagesHandler = (event) => setImages(event.target.value)
    const descriptionHandler = (event) => setDescription(event.target.value)
    const instrumentsHandler = (event) => setInstruments(event.target.value)
    const styleHandler = (event) => setStyle(event.target.value)
    // const favoriteClassHandler = (event) => setFavoriteClass(event.target.value)
    // const favoriteEventHandler = (event) => setFavoriteEvent(event.target.value)
    // const favoriteSaleHandler = (event) => setFavoriteSale(event.target.value)
    // const saleHandler = (event) => setSale(event.target.value)
    // const eventHandler = (event) => setEvent(event.target.value)
    // const classesHandler = (event) => setClasses(event.target.value)


    const submitHandler = (event) => {
        event.preventDefault()

        const newProfile = {
            email: email,
            name: name,
            username: username,
            picture: picture,
            presentationCard: presentationcard,
            telephone: telephone,
            images: images,
            description: description,
            instruments: instruments,
            style: style,
        }

        console.log(newProfile)

        const postApi = async () => {
            const storedToken = localStorage.getItem("authToken");
            try{
                const res = await axios.put(endPoint, newProfile,  { headers: { Authorization: `Bearer ${storedToken}` } })
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
        setPresentationCard("")
        setTelephone("")
        setImages("")
        setDescription("")
        setInstruments("")
        setStyle("")
    }


    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Email</label>
                <input type="text" name='email' value={email} onChange={emailHandler}/>
                <br />
                <label>Name</label>
                <input type="text" name='name' value={name} onChange={nameHandler}/>
                <br />
                <label>Username</label>
                <input type="text" name='username' value={username} onChange={usernameHandler}/>
                <br />
                <label>Picture</label>
                <input type="text" name='picture' value={picture} onChange={pictureHandler}/>
                <br />
                <label>Presentation Card</label>
                <input type="text" name='presentationCard' value={presentationcard} onChange={presentationCardHandler}/>
                <br />
                <label>Telephone</label>
                <input type="text" name='telephone' value={telephone} onChange={telephoneHandler}/>
                <br />
                <label>Images</label>
                <input type="text" name='images' value={images} onChange={imagesHandler}/>
                <br />
                <label>Description</label>
                <textarea type="text" rows="5" columns="5" name='description' value={description} onChange={descriptionHandler} />
                <br />
                <label>Instruments</label>
                <select onChange={instrumentsHandler}>
                    {instrumentsArr.map((instrument) => {
                        return(
                            <option value={instrument}>{instrument}</option>
                        )
                    } )}
                </select>
                <br />
                <label>Style</label>
                <input type="text" name='style' value={style} onChange={styleHandler}/>
                <br />


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default ProfileEdit