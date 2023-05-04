import React from 'react';
import { Header } from '../components/Header/Header.jsx';
import { ProductDetail } from '../components/ProductDetail/ProductDetail.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const ProductDescription = () => {
  return (
    <>
      <Header />
      <main>
        <ProductDetail />
      </main>
      <Footer />
    </>
  )
}