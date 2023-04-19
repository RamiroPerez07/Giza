import React from 'react';
import { Route,Routes as ReactDomRoutes } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { Products } from '../pages/Products.jsx';
import { Contact } from '../pages/Contact.jsx';
import { ProductDescription } from '../pages/ProductDescription.jsx';
import { Checkout } from '../pages/Checkout.jsx';
import { Login } from '../pages/Login.jsx';
import {SignUp} from '../pages/SignUp.jsx';
import {RecoverPassword} from '../pages/RecoverPassword.jsx';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute.jsx';
import { Congratulations } from '../pages/Congratulations.jsx';
import { Orders } from '../pages/Orders.jsx';

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
      <Route
        path="/confirmar-pedido"
        element={
          <ProtectedRoute redirectTo={"/ingresar"}>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path='/ingresar' element={<Login />} />
      <Route path='/registro' element={<SignUp />} />
      <Route path='/restablecer-clave' element={<RecoverPassword />} />
      <Route path='/felicitaciones' element={<Congratulations />} />
      <Route path='/pedidos' element={<Orders />} />
    </ReactDomRoutes>
  )
}

