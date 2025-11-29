import React from 'react';
import BackgroundVideo from '../../assets/videos/panaderia.mp4';
import './Header.css';

const Header = () => {
  return (
    <main className='container__home'>
        <video src={BackgroundVideo} autoPlay loop muted></video>
        <div className='container__home-content'>
            <span> Desde nuestro obrador a tu mesa</span>
            <h1>Pastelería Artesanal</h1>
            <p>En D'canela mantenemos viva la pasión por la repostería y panadería de calidad, horneando diariamente en nuestro obrador propio con ingredientes frescos. Aquí encontrarás el producto perfecto para tu día a día o tu celebración. No esperes más para disfrutar de la diferencia artesanal.</p>
            <button className='btn-secondary'>Haz tu Pedido y Recoge en Tienda</button>
        </div>
    </main>
  )
}

export default Header