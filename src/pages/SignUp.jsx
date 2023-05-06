import React, {useEffect} from 'react';
import { Header } from '../components/Header/Header.jsx';
import { RegisterSection } from '../components/RegisterSection/RegisterSection.jsx';
import { useLocation } from 'react-router-dom';
import { useRedirect } from '../hooks/useRedirect.js';
import { Footer } from '../components/Footer/Footer.jsx';

export const SignUp = () => {

  useEffect(()=>{
    window.scroll(0,0);
  },[])

  //llamo al estado enviado a la url
  const {state} = useLocation();

  //llamo al custom hook
  useRedirect(state?.redirectedFromCheckout ? '/confirmar-pedido' : '/');

  return (
    <>
      <Header />
      <main>
        <RegisterSection />
      </main>
      <Footer />
    </>
  )
}