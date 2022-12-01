import "./ProfileLinksEdit.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const endPoint = "http://localhost:8000/api/v1/users/profile/edit"
const apiURL = "http://localhost:8000/api/v1/users/profile"

function ProfileLinksEdit() {
  const storedToken = localStorage.getItem("authToken");
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


    const postApi = async () => {
      try {
        await axios.put(endPoint, newPresentationCard, { headers: { Authorization: `Bearer ${storedToken}` } })
        navigate("/profile")
      } catch (error) {

      }
    }

    postApi()

    setPresentationCardSoundCloud("presentationCardSpotify")
    setPresentationCardFacebook("presentationCardSpotify")
    setPresentationCardInstagram("presentationCardSpotify")
    setPresentationCardLinkedIn("presentationCardSpotify")
    setPresentationCardOther("presentationCardSpotify")
    setPresentationCardTwitter("presentationCardSpotify")
    setPresentationCardSpotify("presentationCardSpotify")
    setPresentationCardYouTube("presentationCardSpotify")
    setPresentationCardiTunes("presentationCardSpotify")
  }

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get(apiURL, { headers: { Authorization: `Bearer ${storedToken}` } })
      setPresentationCardSoundCloud(res.data.presentationCardSoundCloud)
      setPresentationCardFacebook(res.data.presentationCardFacebook)
      setPresentationCardInstagram(res.data.presentationCardInstagram)
      setPresentationCardLinkedIn(res.data.presentationCardLinkedIn)
      setPresentationCardOther(res.data.presentationCardOther)
      setPresentationCardTwitter(res.data.presentationCardTwitter)
      setPresentationCardSpotify(res.data.presentationCardSpotify)
      setPresentationCardYouTube(res.data.presentationCardYouTube)
      setPresentationCardiTunes(res.data.presentationCardiTunes)
    }
    apiCall()
  }, [storedToken])


  return (
    <div>
      <div className="titleFormUpdatePC">
        <h1 className="editProfileTitle profileEditHeight"><span>Presentation</span> Card</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="divFormEditP">
          <label>Spotify</label>
          <input type="text" name='presentationCardSpotify' placeholder={presentationCardSpotify} value={presentationCardSpotify} onChange={presentationCardSpotifyHandler} />
          <br />
        </div>
        <div className="divFormEditP">
          <label>SoundCloud</label>
          <input type="text" name='presentationCardSoundCloud' placeholder={presentationCardSoundCloud} value={presentationCardSoundCloud} onChange={presentationCardSoundCloudHandler} />
          <br />
        </div>
        <div className="divFormEditP">
          <label>YouTube</label>
          <input type="text" name='presentationCardYouTube' placeholder={presentationCardYouTube} value={presentationCardYouTube} onChange={presentationCardYouTubeHandler} />
          <br />
        </div>
        <div className="divFormEditP">
          <label>iTunes Music</label>
          <input type="text" name='presentationCardiTunes' placeholder={presentationCardiTunes} value={presentationCardiTunes} onChange={presentationCardiTunesHandler} />
          <br />
        </div>
        <div className="divFormEditP">
          <label>Facebook</label>
          <input type="text" name='presentationCardFacebook' placeholder={presentationCardFacebook} value={presentationCardFacebook} onChange={presentationCardFacebookHandler} />
          <br />
        </div>
        <div className="divFormEditP">
          <label>Twitter</label>
          <input type="text" name='presentationCardTwitter' placeholder={presentationCardTwitter} value={presentationCardTwitter} onChange={presentationCardTwitterHandler} />
          <br />
        </div>
        <div className="divFormEditP">
          <label>Instagram</label>
          <input type="text" name='presentationCardInstagram' placeholder={presentationCardInstagram} value={presentationCardInstagram} onChange={presentationCardInstagramHandler} />
          <br />
        </div>
        <div className="divFormEditP">
          <label>LinkedIn</label>
          <input type="text" name='presentationCardLinkedIn' placeholder={presentationCardLinkedIn} value={presentationCardLinkedIn} onChange={presentationCardLinkedInHandler} />
          <br />
        </div>
        <div className="divFormEditP">
          <label>Other</label>
          <input type="text" name='presentationCardOther' placeholder={presentationCardOther} value={presentationCardOther} onChange={presentationCardOtherHandler} />
          <br />
        </div>
        <div className="formProfileButton"><button type="submit">Submit</button></div>
      </form>
    </div>
  )
}

export default ProfileLinksEdit