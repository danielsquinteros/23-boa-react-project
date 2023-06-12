import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// Configuración enrutador
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Usuario from './components/Usuario'
import Usuarios from './components/Usuarios'
import Error from './components/Error'
// createBrowserRouter -> configura las rutas (la hacemos nosotros)
// recibe un arreglo de objetos y cada objeto es una configuración de una ruta
// RouterProvider -> traspasa la configuración a todo el proyecto  de React

const myConfigureRoute = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/users',
    element: <Usuarios />
  },
  {
    path: '/user',
    element: <Usuario />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myConfigureRoute}/>
  </React.StrictMode>,
)
