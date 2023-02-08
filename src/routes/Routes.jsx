import React from 'react';
import { Route,Routes as ReactDomRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';

export const Routes = () => {
  return (
    <ReactDomRoutes>
      {/* Home: Vista de la portada + algunas cositas que se agreguen (ventajas de comprar en Giza) */}
      <Route path='/' element={<Home />} />
    </ReactDomRoutes>
  )
}

