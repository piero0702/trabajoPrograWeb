import './TopBar.css'
import { Link } from 'react-router-dom';
import React from 'react';
import { useState,useEffect } from 'react';
import UsuarioLogueado from '../componentsTopBar/UsuarioLogueado'
const TopBar = () => {
    const [ user, setUser ] = useState({ usuario: null, password: null })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        setUser(user);

    }, [])

    const handleCerrarSesion = () => {
        alert('Sesión cerrada');
        localStorage.removeItem('user');
        setUser({ usuario: null, password: null })
    }
     return (
        <>
        <div className="top-bar">
        <div className="logo">
            <h1>
                <a><Link to='/'>UlimaFarma</Link></a>
                </h1>
            </div>
            <div className="links">
                
                <a><Link to='/mas-vendidos'>Mas Vendidos</Link></a> 
                <br />
                <a><Link to='/nuevos'>Nuevos</Link></a> 
                <br />
                <a><Link to='/ofertas'>Ofertas</Link></a> 
                <Link to='/carritoCompras'>C</Link>
                { user?.usuario ? <UsuarioLogueado username={user.usuario} onClick={handleCerrarSesion} /> : <a className='infoLogin'><Link to='/login'>Login</Link></a> }
            </div>
        </div>
        </>
  )

}
export default TopBar