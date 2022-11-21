import React from 'react'

import './Update.css'

function Update() {
    const clear = () => {
        let toggle = document.getElementById('underlist')
        if (toggle.style.display === 'none') {
            return toggle.style.display = 'block'
        } else {
            return toggle.style.display = 'none'
        }
    }

    return (
        <div>
            <nav className='nav'>
                <a href="#" onClick={clear} className='toggle-button'>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <ul className='ul' id='display'>
                    <li className='li'>Home</li>
                    <li className='li'>About</li>
                    <li className='li'>Services</li>
                    <li className='li'>Feedback</li>
                    <li className='li'>Contact</li>
                </ul>
                <p>NavBar</p>
            </nav>
            <ul className='under' id='underlist'>
                <li className='li'>Home</li>
                <li className='li'>About</li>
                <li className='li'>Services</li>
                <li className='li'>Feedback</li>
                <li className='li'>Contact</li>
            </ul>
        </div>
    )
}

export default Update;