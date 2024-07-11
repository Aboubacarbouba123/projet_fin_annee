import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from './pages/Login'
import Home from './pages/Home';
import Port from './pages/Port';
// import ProductsLayout from './layouts/ProductsLayout';
import GrumeC from './pages/GrumeC';
import Debite from './pages/Debite';
import Entree from './pages/Entree';
import FAQ from './pages/FAQ';
import NoPages from './pages/NoPages';
import Essence from './pages/Essence';

import Bile from './pages/Bile';
import Pack from './pages/Pack';
import EntreeScerie from './pages/EntreeScerie'
import Chauffeur2 from './pages/Chauffeur2';
import Gardien from './pages/Gardien';
import BileTransformation from './pages/BileTransformation';
import BileEssence from './pages/BileEssence';
import Billonage from './pages/Billonage';
import { Cubage } from './pages/Cubage';
import Colisage from './pages/Colisage';


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>,
  }, 
  {
    path: '/home',
    element: <Home/>,
  },
  {
    path:'/port',
    element: <Port/>
  }, 
  {
    path: '/entree',
    element: <Entree/>
  },
  {
    path: '/grume',
    element: <GrumeC/>
  },
  {
    path: '/debite',
    element: <Debite/>
  },
  {
    path: '/FAQ',
    element: <FAQ/>
  },
  {
    path: '/essence',
    element: <Essence/>
  },
  {
    path: '/bile',
    element: <Bile/>
  },
  {
    path: '/pack',
    element: <Pack/>
  },
  {
    path: '/scerie',
    element: <EntreeScerie/>
  },
  {
    path: '/chauffeur',
    element: <Chauffeur2/>
  },
  {
    path: '/gardien',
    element: <Gardien/>
  },
  {
    path: '/bile-transformation',
    element: <BileTransformation/>
  },
  {
    path: '/bileEssence',
    element: <BileEssence/>
  },
  {
    path: '/billonage',
    element: <Billonage/>
  },
  {
    path: '/cubage',
    element: <Cubage/>
  },
  {
    path: '/colisage',
    element: <Colisage/>
  },
  {
    path: '*',
    element: <Home/>,
  }    
  
])

const App=() =>{

  return(
    
      <RouterProvider router = {router}/>
  )
}

export default App
