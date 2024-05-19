import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter,RouterProvider} from 'react-router-dom';
import SectionCarroCompras from './components/componentsCarroCompras/SectionCarroCompras';
import Checkout from './components/componentsCheckout/Checkout';
import PedidoCompleto from './components/componentsPedidoCompleto/PedidoCompleto';
const rutas = createHashRouter([
  {
      path: '/carritoCompras',
      element: <SectionCarroCompras/>
  },
  {
      path: '/checkout',
      element: <Checkout/>
  },
  {
      path: '/pedidoCompleto',
      element: <PedidoCompleto/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rutas}/>
  </React.StrictMode>,
)
