import './searchbar.scss'
import SearchIcon from '../../assets/svg/search-icon.svg'

const Searchbar = () => {
    return (
        <div className="searchbar">
            <div className="search-icon">
                <img src={SearchIcon} alt="Search"/>
            </div>
            <form className="search-input-form">
                <input type="text" name="search-input" placeholder="Search bike or anything" required />
                <input type="submit" value="Find"/>
            </form>
        </div>
    )
}

export default Searchbar