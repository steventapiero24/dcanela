import React from 'react'
import Croisant from '../../assets/Images/croisant.png'
import './Nosotros.css'

const   Nosotros = () => {
  return (
    <section className='container__nosotros'>
      <div className='container__nosotros-content'>
        <h3>WhatsApp, mail o una llamada para tener tus pedidos preparados</h3>
        <p>En <b>D’canela</b> te lo queremos poner muy fácil. Envíanos por WhatsApp o correo electrónico tu pedido o llámanos a nuestra tienda para reservar todo lo que necesitas para tu celebración
        </p>
        <button className='btn-secondary'>Hablemos por WhatsApp</button>
      </div>
      <img src={Croisant} alt="croisant" />
    </section>
  )
}

export default Nosotros