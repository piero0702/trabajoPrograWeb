import React, { useState } from 'react';
import products from '../../../public/dataEnCarrito';
import Layers from '../../components/componentLayers/Layers';
import productosGuardados from 'C:/Users/usuario/Desktop/Repositorios/ProyectoPrograWeb/proyecto-progra-web/public/dataGuardados.js';

function SectionCarroCompras() {
    // Calcula el subtotal inicial
    const totalProductos = sumarPrecios(products);
    const [subtotal, setSubtotal] = useState(totalProductos); // Inicializa el estado con el valor calculado

    function sumarPrecios(productos) {
        let total = 0;
        for (let producto of productos) {
          total += parseFloat(producto.price);
        }
        return total.toFixed(2); // Devuelve el total calculado
    }

    return (
        <>
            <section>
                <h2>{products.length} items en tu carrito de compras</h2>
                <div>
                    <h3>Items disponibles para envío</h3>
                    {products.map((product, index) => (
                        <Layers key={index} product={product} subtotal={subtotal} setSubtotal={setSubtotal}/>
                    ))}
                </div>
                <h3>Sub-Total: ${subtotal}</h3> {/* Muestra el subtotal */}
                <h2>Guardado para despues</h2>
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
