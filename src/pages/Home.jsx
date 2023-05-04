import React from 'react';
import { Header } from '../components/Header/Header.jsx';
import { Hero } from '../components/Hero/Hero.jsx';
import { Footer } from '../components/Footer/Footer.jsx';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}