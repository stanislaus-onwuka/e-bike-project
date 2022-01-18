import SearchIcon from '../../assets/svg/search-icon.svg'
import './searchbar.scss'

const Searchbar = () => {
    return (
        <div className="searchbar">
            <div className="search-icon">
                <img src={SearchIcon} alt="Search"/>
            </div>
            <form className="search-input-form">
                <input type="text" name="search-input" placeholder="Search bike or anything" required className='search-input' />
                <input type="submit" value="Find" className='search-form-submit-btn'/>
            </form>
        </div>
    )
}

export default Searchbar