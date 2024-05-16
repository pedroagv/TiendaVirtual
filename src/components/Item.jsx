import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'


const Item = ({ producto }) => {
  return (
    <div className='col-12 col-sm-6 col-md-3- col-lg-3 mb-3'>
      <div id={producto.id} className="card" >
        <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
        <div className="card-body">
          <h5 className="card-title mb-0 text-truncate" style={{ maxWidth: '100%' }}>
            {producto.titulo}
          </h5>
          <p className="card-text">
            Precio: ${producto.precio}.<br />
            Categoría: {toCapital(producto.categoria)}
          </p>
          <Link className="btn bg-rosa-second ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
      </div>
    </div>
  )
}

export default Item
