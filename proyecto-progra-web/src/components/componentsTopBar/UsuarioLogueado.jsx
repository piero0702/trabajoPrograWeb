import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';

export const UsuarioLogueado = ({ username, onClick }) => {
  return (
    <>
      <div className="dashboard">
        {username === 'admin' ? (
          <Link to='/admin-app/dashboard'>Dashboard</Link>
        ) : (
          <Link to='/dashboard-usuario'>{`${username}`}</Link>
        )}
      </div>
      

      <div className="cerrar">
        <button onClick={onClick}>Cerrar Sesión</button>
      </div>
    </>
  );
};


