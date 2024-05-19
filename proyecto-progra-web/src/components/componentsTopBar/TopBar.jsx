import './TopBar.css'
import { Link } from 'react-router-dom';
import React from 'react';
const TopBar = () => {
    
     return (
        <>
        <div className="top-bar">
        <div className="logo">
            <h1>
                <a><Link to='/'>UlimaFarma</Link></a>
                </h1>
            </div>
            <div className="links">
                
                <a><Link to='/'>Mas Vendidos</Link></a> 
                <br />
                <a><Link to='/nuevos'>Nuevos</Link></a> 
                <br />
                <a><Link to='/ofertas'>Ofertas</Link></a> 
                <button><Link to='/carritoCompras'>Carrito Compras</Link></button>
            </div>
        </div>
        </>
  )

}
export default TopBar