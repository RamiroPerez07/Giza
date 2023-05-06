import React, {useEffect} from 'react';
import { CongratulationsSection } from '../components/CongratulationsSection/CongratulationsSection.jsx';
import { Header } from '../components/Header/Header.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const Congratulations = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
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

