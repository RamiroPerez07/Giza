import React from 'react';
import { CongratulationsSection } from '../components/CongratulationsSection/CongratulationsSection.jsx';
import { Header } from '../components/Header/Header.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const Congratulations = () => {
  return (
    <>
      <Header />
      <main>
        <CongratulationsSection />
      </main>
      <Footer />
    </>
  )
}

