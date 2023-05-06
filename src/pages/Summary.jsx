import React, {useEffect} from 'react';
import { Header } from '../components/Header/Header.jsx';
import { SummarySection } from '../components/Summary/SummarySection.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const Summary = () => {

  useEffect(()=>{
    window.scroll(0,0);
  },[])

  return (
    <>
      <Header />
      <main>
        <SummarySection />
      </main>
      <Footer />
    </>
  )
}

