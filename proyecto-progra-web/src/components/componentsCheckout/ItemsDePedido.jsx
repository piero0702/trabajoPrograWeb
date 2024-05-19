import React from 'react'
import products from '../../../public/dataEnCarrito';
const ItemsDePedido = () => {
  return (
    <div>
      <h4>Items en pedido</h4>
        {
            products.map(product => (
                <div>
                    <h5>1x {product.name}</h5>
                    <h5>{product.price}</h5>
                </div>
            ))
        }
    </div>
  )
}
export default ItemsDePedido
