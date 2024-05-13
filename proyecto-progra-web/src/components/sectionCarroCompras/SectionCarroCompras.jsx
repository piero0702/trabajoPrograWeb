import React from 'react';
import products from '../layers/data';
import Layers from '../layers/Layers';
import productosGuardados    from '../layers/dataGuardados';
function SectionCarroCompras() {
    return (
        <>
            <section>
                <h2>{products.length} items en tu carrito de compras</h2>
                <div>
                    <h3>Items disponibles para envío</h3>
                    {products.map((product, index) => (
                        <Layers key={index} product={product} />
                    ))}
                </div>
                <h2>Guardado para despues</h2>
                {
                    productosGuardados.map((product,index) => (
                        <Layers key={index} product={product}/>
                    ))
                }
            </section>
        </>
    );
}

export default SectionCarroCompras;
