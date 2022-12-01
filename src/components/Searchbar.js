import "./Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"


const Searchbar = (props) => {
    const searchChangeHandler = (event) => {
        props.onSearch(event.target.value)
    }
    return (
        <div className="searchBar">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" onChange={searchChangeHandler} ></input>
        </div>
    )
}



export default Searchbar