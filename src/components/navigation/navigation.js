import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/svg/logo.svg'
import MenuIcon from '../../assets/svg/menu.svg'
import CloseMenuIcon from '../../assets/svg/x.svg' 
import './navigation.scss'

const activeStyle = {
    fontWeight: 'bold',
    color: '#233348',
    opacity: 1
};

const CustomLink = ({path, pathName}) => {
    return (
        <NavLink to={path} style={({ isActive }) => isActive ? activeStyle : undefined}>{ pathName }</NavLink>
    )
}

const Navigation = () => {
    const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

    return (
        <nav className="navigation">
            <Link to="/" className="logo">
                <img src={Logo} alt="eBike Logo" />
            </Link>
            <ul className="desktop-menu">
                <li className="menu-item"><CustomLink path="/product" pathName="Product"/></li>
                <li className="menu-item"><CustomLink path="/type" pathName="Bike Type"/></li>
                <li className="menu-item"><CustomLink path="/about" pathName="About us"/></li>
                <li className="menu-item"><CustomLink path="/testimonials" pathName="Testimonials"/></li>
                <li className="menu-item"><CustomLink path="/contact" pathName="Contact"/></li>
            </ul>
            <button onClick={ ()=>setMobileMenuStatus(true) } className="mobile-menu-btn">
                <img src={MenuIcon} alt="menu"/>
            </button>
            <div className={`mobile-menu-container ${mobileMenuStatus ? "show-menu" : ""}`}>
                <button onClick={ ()=>setMobileMenuStatus(false) } className="close-menu-btn">
                    <img src={CloseMenuIcon} alt="close menu"/>
                </button>
                <ul className="mobile-menu">
                    <li className="menu-item"><CustomLink path="/" pathName="Homepage"/></li>
                    <li className="menu-item"><CustomLink path="/product" pathName="Product"/></li>
                    <li className="menu-item"><CustomLink path="/type" pathName="Bike Type"/></li>
                    <li className="menu-item"><CustomLink path="/about" pathName="About us"/></li>
                    <li className="menu-item"><CustomLink path="/testimonials" pathName="Testimonials"/></li>
                    <li className="menu-item"><CustomLink path="/contact" pathName="Contact"/></li>
                </ul>
                <h5 className="copyright">©eBike 2021. All rights reserved</h5>
            </div>
        </nav>
    )
}

export default Navigation