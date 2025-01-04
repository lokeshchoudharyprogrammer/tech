import React from 'react';
import '../styles/header.css';
export const Header = () => {
    return (
        <div className='header'>
            <div>
                <p onClick={() => { window.location.href = '/' }} className='logo-name'>Flypipe Shop</p>
            </div>
            <div className='header-links'>
                <p onClick={() => { window.location.href = '/' }}>Home</p>
                <p onClick={() => { window.location.href = '/product' }}>Products</p>
                <p>About</p>
                <p>Contact</p>
                <div>
                    <button className='login-button'>Login</button>
                </div>
            </div>
        </div>
    )
}
