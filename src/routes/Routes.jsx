import React from 'react';
import { Route,Routes as ReactDomRoutes } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { Products } from '../pages/Products.jsx';
import { Contact } from '../pages/Contact.jsx';

export const Routes = () => {
  return (
    <ReactDomRoutes>
      {/* Home: Vista de la portada + algunas cositas que se agreguen (ventajas de comprar en Giza) */}
      <Route path='/' element={<Home />} />
      <Route path='/productos' element={<Products />} />
      <Route path='/contacto' element={<Contact />} />
    </ReactDomRoutes>
  )
}

