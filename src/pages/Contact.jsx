import React, {useEffect} from 'react';
import { ContactSection } from '../components/ContactSection/ContactSection.jsx';
import { Header } from '../components/Header/Header.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const Contact = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])

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