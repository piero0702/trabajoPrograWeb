import React from 'react';
import products from '../../../public/dataEnCarrito';
const Checkout = () => {
    const listaInputs = () => [
        'Linea 1', 'Linea 2', 'Distrito', 'Ciudad', 'Pais'
    ];

    return (
        <>
            <h2>¡Casi listo! Tu orden no estará completa hasta que revises y presiones el botón "completar orden" al final de la página.</h2>
            <h3>Datos de compra</h3>
            <div id='datos'>
                <div id='direccionEnvio'>
                    <h4>Dirección de envío</h4>
                    {listaInputs().map((input, index) => (
                        <React.Fragment key={index}>
                            <input type="text" placeholder={input} />
                            <br />
                        </React.Fragment>
                    ))}
                </div>
                <div id='pago'>
                    <h4>Pago</h4>
                    <input type="radio" name="paymentMethod" id="qrPayment" />
                    <label htmlFor="qrPayment">Pago con QR</label>
                    <input type="radio" name="paymentMethod" id="creditCardPayment" />
                    <label htmlFor="creditCardPayment">Pago con tarjeta de crédito</label>
                    <br />
                    <input type="text" placeholder='Numero de tarjeta'/>
                    <br />
                    <input type="text" placeholder='Nombre en tarjeta'/>
                    <br />
                    <input type="month" placeholder='Fecha Vencimiento'/>
                    <br />
                    <input type="text" placeholder='Numero de tarjeta'/>
                    <br />
                    <input type="text" placeholder='CVV'/>
                </div>
            </div>
            <h3>Metodo de envio</h3>
            <input type="radio" name="sendMethod" id="envioDomicilio" />
            <label htmlFor="envioDomicilio">Envío a domicilio S/8</label>
            <input type="radio" name="sendMethod" id="recojoEnTienda" />
            <label htmlFor="recojoEnTienda">Recojo en tienda S/0</label>
            <div id='itemsPedido'>
                <h4>Items en pedido</h4>
                {
                    products.map((product, index) => (
                        <div>
                            <h5>1x {product.name}</h5>
                            <h5>{product.price}</h5>
                        </div>
                    ))
                }
            </div>
            <div id="resumenOrden">
                <h4>Resumen de orden</h4>
                <p>Subtotal: S/123</p>
                <p>Envio: S/8</p>
                <p>Impuestos: S/18</p>
                <p>Total: S/149</p>
            </div>
        </>
    );
};

export default Checkout;
