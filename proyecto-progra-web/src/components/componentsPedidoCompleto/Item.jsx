import React from 'react'
const Item = ({product}) => {
  return (
    <div>
        <img src={product.image} alt="imagenProducto" />
        <h5>{product.name}</h5>
        <p>{product.description}</p>
    </div>
  )
}

export default Item
