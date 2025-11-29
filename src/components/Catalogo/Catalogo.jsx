import React from 'react'
import { Categorias } from '../../assets/Auxiliares/bd';
import ScrollVelocity from '../Slider/ScrollVelocity'
import './Catalogo.css'

const Catalogo = () => {
  return (
    <section className='container__catalogo'>
      <div className='container__catalogo-slider'>
        <ScrollVelocity
          texts={['Hecho con el cariño de siempre • ', 'Hecho con el cariño de siempre • ']}
          velocity={100}
          className="custom-scroll-text"
        />
      </div>
      <div className='container__catalogo-info'>
        <h2> En D’canela <br/>elaboramos nuestros productos</h2>
        <div className='container__catalogo-info-productos'>
          {Categorias.map((categoria, index) => (
            <div key={index} className='catalogo-info-productos'>
              <h3>{categoria.nombre}</h3>
              <p>{categoria.descripcion}</p>
              <img src={categoria.imageUrl} alt={categoria.nombre} />
              <button className='btn-secondary btn-outline'>Comprar</button>
            </div>
          ))}
        </div>
      </div>

        
    </section>
  )
}

export default Catalogo