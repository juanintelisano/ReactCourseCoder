import React from 'react'
import { Link } from 'react-router-dom'

const Carrito = () => {

  return (
    <div>
        <h1>Carrito</h1>
        <p> Tu carrito blablabla</p>
        <Link to="/Checkout">Proceder con la compra</Link>
    </div>
  )
}

export default Carrito