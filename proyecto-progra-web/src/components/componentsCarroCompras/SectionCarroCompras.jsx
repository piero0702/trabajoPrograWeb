import React, { useState } from 'react';
import products from '../../../public/dataEnCarrito';
import Layers from './Layers'
import productosGuardados from '../../../public/dataGuardados';
import './carroComprasStyle.css'
import { Link } from 'react-router-dom';
function SectionCarroCompras() {
    const totalProductos = sumarPrecios(products);
    const [subtotal, setSubtotal] = useState(totalProductos); 

    function sumarPrecios(productos) {
        let total = 0;
        for (let producto of productos) {
          total += parseFloat(producto.price);
        }
        return total.toFixed(2);
    }

    return (
        <>
            <section>
                <h2>{products.length} items en tu carrito de compras</h2>
                <h3>Items disponibles para envío</h3>
                <div>
                    {products.map((product, index) => (
                        <Layers key={index} product={product} subtotal={subtotal} setSubtotal={setSubtotal}/>
                    ))}
                </div>
                <div id='Subtotal'>
                    <h4>Sub-Total: S/{subtotal}</h4>
                    <Link to="/checkout"><button id='botonCheckout'>Checkout</button></Link>
                </div>
                <h3>Guardado para despues</h3>
                {
                    productosGuardados.map((product, index) => (
                        <Layers key={index} product={product}/>
                    ))
                }
            </section>
        </>
    );
}

export default SectionCarroCompras;
