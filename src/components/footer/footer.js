import './footer.scss'
import FooterLogo from '../../assets/svg/logo-white.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer-info-container">
                <div className="footer-logo">
                    <img src={ FooterLogo } alt="eBike logo"/>
                </div>
                <p className="footer-info">
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                </p>
                <h5 className="copyright">©eBike 2021. All rights reserved</h5>
            </div>
            <div className="footer-menu">
                <h4 className="footer-menu-title">Company</h4>
                <ul>
                    <li className="footer-menu-item">Product</li>
                    <li className="footer-menu-item">Bike type</li>
                    <li className="footer-menu-item">About us</li>
                    <li className="footer-menu-item">Contact</li>
                </ul>
            </div>
            <div className="footer-menu">
                <h4 className="footer-menu-title">Help</h4>
                <ul>
                    <li className="footer-menu-item">Help center</li>
                    <li className="footer-menu-item">Contact support</li>
                    <li className="footer-menu-item">Instructions</li>
                    <li className="footer-menu-item">How it works</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer