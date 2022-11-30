import { Link } from "react-router-dom"
import '../favorites/Favorites.css'

export default function FavoritesAll() {
    
    return (
        <div className="favoriteCards">
            <h1>See your favorites</h1>
            <Link to={'/favorites-classes'}>
            <div className = "favoritesCard">
                  <img className = "photoCard"src="https://www.skoove.com/blog/wp-content/uploads/2021/05/download-1-1024x576.jpeg" alt="instrument"/>
                  <h3>Your Favorite Classes</h3>
                  <img className ="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
                  </div>
            </Link>
            <Link to={'/favorites-events'}>
            <div className = "favoritesCard">
                  <img className = "photoCard"src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/11/05/16676196637520.jpg" alt="instrument"/>
                  <h3 className="textStyle">Your Favorite Events</h3>
                  <img className ="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
            </div>
            </Link>
            <Link to={'/favorites-sales'}>
            <div className = "favoritesCard">
                  <img className = "photoCard"src="https://musicstrive.com/wp-content/uploads/2021/01/How-To-Sell-a-Guitar-for-Cash.jpg" alt="instrument"/>
                  <h3 className="textStyle">Your Favorite Sales</h3>
                  <img className ="smallLogo" src="https://s.tmimgcdn.com/scr/800x500/271800/equalizer-music-sound-logo-symbol-vector-v26_271868-original.jpg" alt="logo"/>
            </div>
            </Link>
        </div>
    )
}