import React from 'react';
import { ContactSection } from '../components/ContactSection/ContactSection.jsx';
import { Header } from '../components/Header/Header.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}