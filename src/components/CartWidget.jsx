import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { Nav } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';


const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <Nav.Link as={Link} to="/carrito">
      <span>🛒 <Badge bg="danger" className='' >{cantidadEnCarrito()}</Badge></span> 
    </Nav.Link>
  )
}

export default CartWidget