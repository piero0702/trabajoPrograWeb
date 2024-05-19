import React from 'react'
import products from '../../../public/dataEnCarrito'
import Item from '../../components/componentsPedidoCompleto/Item'
import './pedidoCompletoStyle.css'
const PedidoCompleto = () => {
  return (
    <div id='pedidoCompledoID'>
        <h2>¡Muchas Gracias por su pedido!</h2>
        <h4>Puedes ver el detalle y estado de tu pedido ingresando a <a href="">tu cuenta</a></h4>
        <h3>Tambien te podria interesar...</h3>
        <div id='itemDisplay'>
        {
            products.map(
                (product,index) => <Item key={index} product={product}/>
            )
        }
        </div>
    </div>
  )
}

export default PedidoCompleto
