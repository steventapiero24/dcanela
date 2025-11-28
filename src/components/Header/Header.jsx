import React from 'react';
import BackgroundVideo from '../../assets/videos/panaderia.mp4';

const Header = () => {
  return (
    <div>
        <video src={BackgroundVideo} autoPlay loop muted></video>
        <div>
            <span>Mi publicación</span>
            <h1>Panaderia</h1>
            <p>Lo mejor del pan</p>
            <button>Reservar</button>
        </div>
    </div>
  )
}

export default Header