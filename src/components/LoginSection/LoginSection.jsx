import React from 'react';
import {LandingSection} from '../LandingSection/LandingSection.jsx';
import { LoginForm } from '../LoginForm/LoginForm.jsx';
import { Breadcrum } from '../Breadcrum/Breadcrum.jsx';

export const LoginSection = () => {
  const sections = [
    {
      name: "Home",
      page: "/",
    },
    {
      name: "Iniciar sesión",
      page: "ingresar",
    }
  ];

  return (
    <>
      <LandingSection>
        <Breadcrum sections={sections} />
        <LoginForm />
      </LandingSection>
    </>
  )
}

