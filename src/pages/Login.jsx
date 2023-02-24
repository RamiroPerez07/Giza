import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header/Header.jsx';
import { LoginSection } from '../components/LoginSection/LoginSection.jsx';
import {signInWithGoogle} from '../firebase/firebase-utils.js';
import { useRedirect } from '../hooks/useRedirect.js';


export const Login = () => {

  //llamo al estado enviado a la url
  const {state} = useLocation();

  //llamo al custom hook
  useRedirect(state?.redirectedFromCheckout ? '/confirmar-pedido' : '/');

  return (
    <>
      <Header />
      <main>
        <LoginSection />
      </main>
    </>
  )
}