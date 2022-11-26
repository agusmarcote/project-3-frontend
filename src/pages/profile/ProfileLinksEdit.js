import "./ProfileLinksEdit.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function ProfileLinksEdit () {
    const [presentationCard1, setPresentationCard1] = useState("")
    const [presentationCard2, setpresentationCard2] = useState("")

    const navigate = useNavigate()

    const presentationC1Handler = (event) => setPresentationCard1(event.target.value)
    const presentationC2Handler = (event) => setpresentationCard2(event.target.value)

    const submitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <form>
            <form onSubmit={submitHandler}>
                <label>Link 1</label>
                <input type="text" name='presentationCard1' value={presentationCard1} onChange={presentationC1Handler}/>
                <br />
                <label>Link 1</label>
                <input type="text" name='presentationCard2' value={presentationCard2} onChange={presentationC2Handler}/>
                <br />
                <button type="submit">Submit</button>
            </form>
            </form>
        </div>
    )
}

export default ProfileLinksEdit