import React from 'react';
import { Header } from '../components/Header/Header.jsx';

export const Login = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Login</h1>
        <input placeholder='usuario' />
        <input placeholder='contraseña' />
      </main>
    </>
  )
}