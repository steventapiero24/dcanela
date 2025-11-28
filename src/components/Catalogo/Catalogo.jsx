import React from 'react'
import { Categorias } from '../../assets/Auxiliares/bd'

const Catalogo = () => {
  return (
    <div>
      <h2> En D’canela elaboramos nuestros productos</h2>
      { Categorias.map( (categoria, index) => (
        <div key={index}>
          <h3>{categoria.nombre}</h3>
          <p>{categoria.descripcion}</p>
          <img src={categoria.imageUrl} alt={categoria.nombre} />
        </div>
      ))}
    </div>
  )
}

export default Catalogo