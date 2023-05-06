import React, {useEffect} from 'react';
import { Header } from '../components/Header/Header.jsx';
import {RecoverPasswordSection} from '../components/RecoverPasswordSection/RecoverPasswordSection.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const RecoverPassword = () => {

  useEffect(()=>{
    window.scroll(0,0);
  },[])

  return (
    <>
      <Header />
      <main>
        <RecoverPasswordSection />
      </main>
      <Footer />
    </>
  )
}