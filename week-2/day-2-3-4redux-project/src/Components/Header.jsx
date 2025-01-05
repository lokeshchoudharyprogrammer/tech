import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <div className='header'>
            <div>
                <p onClick={() => { window.location.href = '/' }} className='logo-name'>Flypipe Shop</p>
            </div>
            <div className='header-links'>
                <p className='nav-links' onClick={() => { window.location.href = '/' }}>Home</p>
                <Link to='/product'>
                    <p className='nav-links'>Products</p>
                </Link>
                <p className='nav-links'>About</p>
                <p className='nav-links'>Contact</p>
                <div>
                    <button className='login-button'>Login</button>
                </div>
            </div>
        </div>
    )
}
