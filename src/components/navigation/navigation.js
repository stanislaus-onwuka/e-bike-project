import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/svg/logo.svg'
import './navigation.scss'

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/" className="logo">
                <img src={Logo} alt="eBike Logo" />
            </Link>
            <ul className="desktop-menu">
                <li className="menu-item"><NavLink to="/product">Product</NavLink></li>
                <li className="menu-item"><NavLink to="/type">Bike Type</NavLink></li>
                <li className="menu-item"><NavLink to="/about">About us</NavLink></li>
                <li className="menu-item"><NavLink to="/testimonials">Testimonials</NavLink></li>
                <li className="menu-item"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <button className="mobile-menu-btn">Menu</button>
            <div className="mobile-menu-container">
                <button className="close-menu-btn">Close Menu</button>
                <ul className="mobile-menu">
                    <li className="menu-item"><NavLink to="/product">Product</NavLink></li>
                    <li className="menu-item"><NavLink to="/type">Bike Type</NavLink></li>
                    <li className="menu-item"><NavLink to="/about">About us</NavLink></li>
                    <li className="menu-item"><NavLink to="/testimonials">Testimonials</NavLink></li>
                    <li className="menu-item"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation