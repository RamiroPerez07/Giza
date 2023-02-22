import React from 'react';
import { CheckoutSection } from '../components/CheckoutSection/CheckoutSection.jsx';
import { Header } from '../components/Header/Header.jsx';

export const Checkout = () => {
  return (
    <>
      <Header />
      <main>
        <CheckoutSection />
      </main>
    </>
  )
}