import React from 'react';
import { Header } from '../components/Header/Header.jsx';

export const SignUp = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Sign Up</h1>
        <input placeholder='usuario' />
        <input placeholder='contraseña' />
      </main>
    </>
  )
}