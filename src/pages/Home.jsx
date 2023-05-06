import React, {useEffect} from 'react';
import { Header } from '../components/Header/Header.jsx';
import { Hero } from '../components/Hero/Hero.jsx';
import { Footer } from '../components/Footer/Footer.jsx';
import { AdvantagesSection } from '../components/AdvantagesSection/AdvantagesSection.jsx';

export const Home = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AdvantagesSection />
      </main>
      <Footer />
    </>
  )
}