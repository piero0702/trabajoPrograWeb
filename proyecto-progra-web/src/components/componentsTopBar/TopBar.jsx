import './TopBar.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import UsuarioLogueado from '../componentsTopBar/UsuarioLogueado';

=======
import React from 'react';
import { useState,useEffect } from 'react';
import UsuarioLogueado from '../componentsTopBar/UsuarioLogueado'
import IconCarritoCompras from './IconCarritoCompras'
>>>>>>> 04ba772b128b357f5908b655ac4c0f55dc282bde
const TopBar = () => {
  const [user, setUser] = useState({ usuario: null, password: null });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

<<<<<<< HEAD
  const handleSearchSubmit = async () => {
    try {
      const response = await fetch(`/api/productos?query=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Error al buscar productos');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error al buscar productos:', error);
    }
  };
=======
    const handleSearchSubmit = async () => {
        try {
            const response = await fetch(`/api/productos?query=${searchTerm}`);
            if (!response.ok) {
                throw new Error('Error al buscar productos');
            }
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error al buscar productos:', error);
        }
    };
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
            <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button onClick={handleSearchSubmit}>Buscar</button>
            </div>
            <div className="links">
                
                <a><Link to='/mas-vendidos'>Mas Vendidos</Link></a> 
                <br />
                <a><Link to='/nuevos'>Nuevos</Link></a> 
                <br />
                <a><Link to='/ofertas'>Ofertas</Link></a> 
                <Link to='/carritoCompras'>
                    <IconCarritoCompras width={20} height={20}/>
                </Link>
                { user?.usuario ? <UsuarioLogueado username={user.usuario} onClick={handleCerrarSesion} /> : <a className='infoLogin'><Link to='/login'>Login</Link></a> }
            </div>
        </div>
        </>
  )
>>>>>>> 04ba772b128b357f5908b655ac4c0f55dc282bde

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  const handleCerrarSesion = () => {
    alert('Sesión cerrada');
    localStorage.removeItem('user');
    setUser({ usuario: null, password: null });
  };

  return (
    <div className="top-bar">
      <div className="logo">
        <h1>
          <Link to='/'>UlimaFarma</Link>
        </h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchSubmit}>Buscar</button>
      </div>
      <div className="links">
        <Link to='/mas-vendidos'>Mas Vendidos</Link>
        <Link to='/nuevos'>Nuevos</Link>
        <Link to='/ofertas'>Ofertas</Link>
        <Link to='/carritoCompras'>C</Link>
        {user?.usuario ? (
          <UsuarioLogueado username={user.usuario} onClick={handleCerrarSesion} />
        ) : (
          <Link className='infoLogin' to='/login'>Login</Link>
        )}
      </div>
    </div>
  );
};

export default TopBar;
