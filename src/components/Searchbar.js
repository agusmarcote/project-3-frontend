import "./Searchbar.css";


const Searchbar = (props) => {
    const searchChangeHandler = (event) => {
        props.onSearch(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange={searchChangeHandler}></input>
        </div>
    )
}



export default Searchbar