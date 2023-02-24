import React from 'react';
import { Header } from '../components/Header/Header.jsx';
import {signInWithGoogle} from '../firebase/firebase-utils.js';

export const Login = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Login</h1>
        <input placeholder='usuario' />
        <input placeholder='contraseña' />
        <button onClick={signInWithGoogle}>Google</button>
      </main>
    </>
  )
}