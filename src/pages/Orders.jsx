import React from 'react';
import { Header } from '../components/Header/Header.jsx';
import { OrdersSection } from '../components/OrdersSection/OrdersSection.jsx';
import { Footer } from '../components/Footer/Footer.jsx';


export const Orders = () => {
  return (
    <>
      <Header />
      <main>
        <OrdersSection />
      </main>
      <Footer />
    </>
  )
}