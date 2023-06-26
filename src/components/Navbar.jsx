import React from 'react'
import "../css/Navbar.css"
import { FaGithub, FaSpotify } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div className='navbar'>
            <FaSpotify className=' fa fa-spotify' />
            <div className="app-header">Music Player</div>
            <div className='nav-links'>
                <a href="#" target='blank'></a>
                <FaGithub className='fa fa-github' />
            </div>
        </div>
    )
}

export default Navbar