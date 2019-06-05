import React from 'react';
import Tilt from 'react-tilt'
import brainIcon from './brain.png'
import './Logo.css'


const Logo = () => {
    return (
        <div className="ma4 mt0">        
            <Tilt className="Tilt br3 shadow-2" options={{ max: 70, speed: 350 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img alt="brain icon" src={brainIcon}/> </div>
            </Tilt>
        </div>
    )
}

export default Logo;