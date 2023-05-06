import React, { useEffect } from 'react';
import { CheckoutSection } from '../components/CheckoutSection/CheckoutSection.jsx';
import { Header } from '../components/Header/Header.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const Checkout = () => {

  useEffect(()=>{
    window.scroll(0,0);
  },[])

  return (
    <>
      <Header />
      <main>
        <CheckoutSection />
      </main>
      <Footer />
    </>
  )
}