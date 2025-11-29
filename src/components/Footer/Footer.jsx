import React from 'react'
import './Footer.css'
import Logo from '../../assets/images/cropped-Mi-publicación-2-3.png'
import Logofacebook from '../../assets/images/facebook.png'
import LogoIg from '../../assets/images/logotipo-de-instagram.png'

const Footer = () => {
  return (
    <div className='container__footer'>
      <div className='container__footer_contact'>
        <h3>Encuentranos</h3>
        <h4>Dirección</h4>
        <p>Calle Mar del Norte, 1</p>
        <p>28821, Coslada (Madrid).</p>
      </div>
      <div className='container__footer_logo'>
       <img src={Logo} alt='Logo' />
        iconos redes sociales
        <div className='logos'>
          <img src={Logofacebook} alt='Logo facebook' />
          <img src={LogoIg} alt='Logo ig' />
        </div>
      </div>
      <div className='container__footer_schedule'>
        <h4>Horario</h4>
        <p>Lunes a Viernes: <span> de 8:00 a 20:00 ininterrumpidamente. </span></p>
        <p>Sábados <span> de 8:00 a 14:30 ininterrumpidamente. </span></p>
        <p>Domingos <span> Cerrado </span></p>
      </div>
    </div>
  )
}

export default Footer