import React, {useEffect} from 'react';
import { Header } from '../components/Header/Header.jsx';
import { ProductDetail } from '../components/ProductDetail/ProductDetail.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const ProductDescription = () => {

  useEffect(()=>{
    window.scroll(0,0);
  },[])

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