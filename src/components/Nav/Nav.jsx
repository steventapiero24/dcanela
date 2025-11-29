import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Logo from '../../assets/images/cropped-Mi-publicación-2-3.png'
import './Nav.css'

const Nav = () => {

  const navRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".container__nav", {
        y: -50,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.4,
        ease: "power3.out"
      })

      gsap.from(".container__nav-menu li", {
        opacity: 0,
        y: -20,
        duration: 1,
        stagger: 0.1,
        delay: 0.4,
        ease: "power3.out"
      })

      gsap.from(".container__nav-contant a", {
        opacity: 0,
        y: -20,
        duration: 1,
        stagger: 0.1,
        delay: 0.6,
        ease: "power3.out"
      })

      gsap.from(".container__nav-logo img", {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        delay: 0.8,
        ease: "power3.out"
      })

    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={navRef} className='container__nav'>
      <div className='container__pad'>
          <div className='container__nav-menu'>
              <li><a href='#'>Inicio</a></li>
              <li><a href='#'>Catalogo</a></li>
              <li><a href='#'>Marcas</a></li>
              <li><a href='#'>Nosotros</a></li>
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
