import React from 'react'
import { Link } from 'react-router-dom'

const ResumenCompra = () => {
  return (
    <div id="resumenOrden">
        <h4>Resumen de orden</h4>
        <p>Subtotal: S/123</p>
        <p>Envio: S/8</p>
        <p>Impuestos: S/18</p>
        <p>Total: S/149</p>
        <Link to="/pedidoCompleto"><button>Completar Orden</button></Link>
    </div>
  )
}

export default ResumenCompra