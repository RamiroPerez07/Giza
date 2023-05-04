import React from 'react';
import { Header } from '../components/Header/Header.jsx';
import {RecoverPasswordSection} from '../components/RecoverPasswordSection/RecoverPasswordSection.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const RecoverPassword = () => {

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