import "./ProfileLinksEdit.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const endPoint = "http://localhost:8000/api/v1/users/profile/edit"
const apiURL = "http://localhost:8000/api/v1/users/profile"

function ProfileLinksEdit() {
    const storedToken = localStorage.getItem("authToken");
    const [profile, setProfile] = useState({})
    const navigate = useNavigate()



    const [presentationCardSpotify, setPresentationCardSpotify] = useState("")
    const [presentationCardYouTube, setPresentationCardYouTube] = useState("")
    const [presentationCardSoundCloud, setPresentationCardSoundCloud] = useState("")
    const [presentationCardiTunes, setPresentationCardiTunes] = useState("")
    const [presentationCardFacebook, setPresentationCardFacebook] = useState("")
    const [presentationCardInstagram, setPresentationCardInstagram] = useState("")
    const [presentationCardLinkedIn, setPresentationCardLinkedIn] = useState("")
    const [presentationCardTwitter, setPresentationCardTwitter] = useState("")
    const [presentationCardOther, setPresentationCardOther] = useState("")



    const presentationCardSpotifyHandler = (event) => setPresentationCardSpotify(event.target.value)
    const presentationCardYouTubeHandler = (event) => setPresentationCardYouTube(event.target.value)
    const presentationCardSoundCloudHandler = (event) => setPresentationCardSoundCloud(event.target.value)
    const presentationCardiTunesHandler = (event) => setPresentationCardiTunes(event.target.value)
    const presentationCardFacebookHandler = (event) => setPresentationCardFacebook(event.target.value)
    const presentationCardInstagramHandler = (event) => setPresentationCardInstagram(event.target.value)
    const presentationCardLinkedInHandler = (event) => setPresentationCardLinkedIn(event.target.value)
    const presentationCardTwitterHandler = (event) => setPresentationCardTwitter(event.target.value)
    const presentationCardOtherHandler = (event) => setPresentationCardOther(event.target.value)

    const submitHandler = (event) => {
        event.preventDefault()

        const newPresentationCard = {
            presentationCardSpotify: presentationCardSpotify,
            presentationCardSoundCloud: presentationCardSoundCloud,
            presentationCardiTunes: presentationCardiTunes,
            presentationCardYouTube: presentationCardYouTube,
            presentationCardInstagram: presentationCardInstagram,
            presentationCardTwitter: presentationCardSpotify,
            presentationCardLinkedIn: presentationCardLinkedIn,
            presentationCardFacebook: presentationCardFacebook,
            presentationCardOther: presentationCardOther,
        }
        console.log(newPresentationCard)

        const postApi = async () => {
            try {
                const res = await axios.put(endPoint, newPresentationCard, { headers: { Authorization: `Bearer ${storedToken}` } })
                console.log(res)
                navigate("/profile")
            } catch (error) {
                console.log(error)
            }
        }

        postApi()

        setPresentationCardSoundCloud("")
        setPresentationCardFacebook("")
        setPresentationCardInstagram("")
        setPresentationCardLinkedIn("")
        setPresentationCardOther("")
        setPresentationCardTwitter("")
        setPresentationCardSpotify("")
        setPresentationCardYouTube("")
        setPresentationCardiTunes("")
    }

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` } })
            setProfile(res.data)
            setPresentationCardSoundCloud(res.data.presentationCardSoundCloud)
            setPresentationCardFacebook(res.data.presentationCardres.data.presentationCard)
            setPresentationCardInstagram(res.data.presentationCardres.data.presentationCard)
            setPresentationCardLinkedIn(res.data.presentationCardres.data.presentationCard)
            setPresentationCardOther(res.data.presentationCardres.data.presentationCard)
            setPresentationCardTwitter(res.data.presentationCardres.data.presentationCard)
            setPresentationCardSpotify(res.data.presentationCardres.data.presentationCard)
            setPresentationCardYouTube(res.data.presentationCardres.data.presentationCard)
            setPresentationCardiTunes(res.data.presentationCardres.data.presentationCard)
        }
        apiCall()
    }, [])


    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Spotify</label>
                <input type="text" name='presentationCardSpotify' placeholder={presentationCardSpotify} value={presentationCardSpotify} onChange={presentationCardSpotifyHandler} />
                <br />
                <label>SoundCloud</label>
                <input type="text" name='presentationCardSoundCloud' placeholder={presentationCardSoundCloud} value={presentationCardSoundCloud} onChange={presentationCardSoundCloudHandler} />
                <br />
                <label>YouTube</label>
                <input type="text" name='presentationCardYouTube' placeholder={presentationCardYouTube} value={presentationCardYouTube} onChange={presentationCardYouTubeHandler} />
                <br />
                <label>iTunes Music</label>
                <input type="text" name='presentationCardiTunes' placeholder={presentationCardiTunes} value={presentationCardiTunes} onChange={presentationCardiTunesHandler} />
                <br />
                <label>Facebook</label>
                <input type="text" name='presentationCardFacebook' placeholder={presentationCardFacebook} value={presentationCardFacebook} onChange={presentationCardFacebookHandler} />
                <br />
                <label>Twitter</label>
                <input type="text" name='presentationCardTwitter' placeholder={presentationCardTwitter} value={presentationCardTwitter} onChange={presentationCardTwitterHandler} />
                <br />
                <label>Instagram</label>
                <input type="text" name='presentationCardInstagram' placeholder={presentationCardInstagram} value={presentationCardInstagram} onChange={presentationCardInstagramHandler} />
                <br />
                <label>LinkedIn</label>
                <input type="text" name='presentationCardLinkedIn' placeholder={presentationCardLinkedIn} value={presentationCardLinkedIn} onChange={presentationCardLinkedInHandler} />
                <br />
                <label>Other</label>
                <input type="text" name='presentationCardOther' placeholder={presentationCardOther} value={presentationCardOther} onChange={presentationCardOtherHandler} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProfileLinksEdit