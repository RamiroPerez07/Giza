import React from 'react';
import { Route,Routes as ReactDomRoutes } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { Products } from '../pages/Products.jsx';
import { Contact } from '../pages/Contact.jsx';
import { ProductDescription } from '../pages/ProductDescription.jsx';
import { Checkout } from '../pages/Checkout.jsx';

export const Routes = () => {
  return (
    <ReactDomRoutes>
      {/* Home: Vista de la portada + algunas cositas que se agreguen (ventajas de comprar en Giza) */}
      <Route path='/' element={<Home />} />
      {/* Section de productos */}
      <Route path='/productos'>
        <Route index element={<Products />} />
        <Route path=':productos' element={<ProductDescription />} />
      </Route>
      <Route path='/contacto' element={<Contact />} />
      <Route path='/checkout' element={<Checkout />} />
    </ReactDomRoutes>
  )
}

