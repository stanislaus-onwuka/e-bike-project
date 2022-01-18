import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="logo">

            </div>
            <ul className="desktop-menu">
                <li className="menu-item"></li>
            </ul>
            <button className="mobile-menu-btn">Menu</button>
            <div className="mobile-menu-container">
                <button className="close-menu-btn">Close Menu</button>
                <ul className="mobile-menu">
                    <li className="menu-item"></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation