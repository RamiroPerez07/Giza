import React from 'react';
import { Header } from '../components/Header/Header.jsx';
import { ProductCatalog } from '../components/ProductCatalog/ProductCatalog.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const Products = () => {
  return (
    <>
      <Header />
      <main>
        <ProductCatalog />
      </main>
      <Footer />
    </>
  )
}