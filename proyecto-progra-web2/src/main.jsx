import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';

import SectionCarroCompras from './components/componentsCarroCompras/SectionCarroCompras';
import Checkout from './components/componentsCheckout/Checkout';
import PedidoCompleto from './components/componentsPedidoCompleto/PedidoCompleto';
import MasVendidos from './components/componentsMasVendidos/MasVendidos';
import MasDetalle from './components/componentsMasDetalle/MasDetalle';
import Nuevos from './components/componentsNuevos/Nuevos';
import Ofertas from './components/componentsOfertas/Ofertas';
import Recuperar from './components/componentsRecuperar/Recuperar';

import Login from './components/componentsLogin/Login';

import Signup from './components/componentsSignup/Signup';
import DashUser from './components/componentsDashUser/DashUser';
import DashAdmin from './components/componentsDashAdmin/DashAdmin';
import Section from './components/componentsSection/Section';
import Ofec from './components/componentsOfec/Ofec';

import { CartProvider } from './components/componentsCarroCompras/context';
import { UserProvider } from '../src/context/User';

const rutas = createHashRouter([
  {
    path: '/',
    element: <Ofec />
  },
  
  {
    path: '/',
    element: <Section />
  },
  {
    path: '/mas-vendidos',
    element: <MasVendidos />
  },
  {
    path: '/moreDetails',
    element: <MasDetalle />
  },
  {
    path: '/nuevos',
    element: <Nuevos />
  },
  {
    path: '/ofertas',
    element: <Ofertas />
  },
  {
    path: '/carritoCompras',
    element: <SectionCarroCompras />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/pedidoCompleto',
    element: <PedidoCompleto />
  },
  {
    path: '/recuperar-contraseña',
    element: <Recuperar />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/dashboard-usuario',
    element: <DashUser />
  },
  {
    path: '/dashboard-admin',
    element: <DashAdmin />
  },
  {
    path: '/admin-app/*',
    element: <DashAdmin/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
      <CartProvider>
        <RouterProvider router={rutas} />
      </CartProvider>
    </React.StrictMode>
  </UserProvider>
  
);