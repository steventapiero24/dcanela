import React from 'react'
import Logo from '../../assets/images/cropped-Mi-publicación-2-3.png'
import './Nav.css'

const Nav = () => {
  return (
    <div className='container__nav'>
      <div className='container__pad'>
          <div className='container__nav-menu'>
              <li>
              <a href='#'>Inicio</a>
              </li>
              <li>
              <a href='#'>Catalogo</a>
              </li>
              <li>
              <a href='#'>Marcas</a>
              </li>
              <li>
              <a href='#'>Nosotros</a>  
              </li>
          </div>
          <div className='container__nav-logo'>
              <img src={Logo} alt='Logo' />
          </div>
          <div className='container__nav-contant'>
              <a href='#'>Contacto</a>
              <a href='#'>Reservas</a>
          </div>
      </div>
    </div>
  )
}

export default Nav