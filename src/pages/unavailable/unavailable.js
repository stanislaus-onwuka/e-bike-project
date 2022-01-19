import { Link } from 'react-router-dom'
import Navigation from '../../components/navigation/navigation'
import Footer from '../../components/footer/footer'
import './unavailable.scss'

const Unavailable = () =>{
    return(
        <div className="unavailable-page">
            <Navigation />
            <main>
                <p className="unavailable-text">This page is currently unavailable.</p>
                <Link to="/" className="homepage-link">Go to homepage</Link>
            </main>
            <Footer/>
        </div>
    )
}

export default Unavailable