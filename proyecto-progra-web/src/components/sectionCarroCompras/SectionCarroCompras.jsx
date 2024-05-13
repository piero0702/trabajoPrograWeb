import React from 'react';
import products from '../layers/data';
import Layers from '../layers/Layers';

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
            </section>
        </>
    );
}

export default SectionCarroCompras;
