import React from 'react'
import products from '../../../public/dataEnCarrito';
const ItemsDePedido = () => {
  return (
    <div id="itemsPedido">
      <h4>Items en pedido:</h4>
        {
            products.map(product => (
                <div>
                    <h5>1x {product.name}<span>{product.price}</span></h5>
                </div>
            ))
        }
    </div>
  )
}
export default ItemsDePedido