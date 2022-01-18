import Navigation from '../../components/navigation/navigation'
import Footer from '../../components/footer/footer'
import './unavailable.scss'

const Unavailable = () =>{
    return(
        <div className="unavailable-page">
            <Navigation />
            <main>
                Unavailable
            </main>
            <Footer/>
        </div>
    )
}

export default Unavailable