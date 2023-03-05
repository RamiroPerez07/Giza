import React from 'react';
import {LandingSection} from '../LandingSection/LandingSection.jsx';
import { RegisterForm } from '../RegisterForm/RegisterForm.jsx';
import { Breadcrum } from '../Breadcrum/Breadcrum.jsx';

export const RegisterSection = () => {
  const sections = [
    {
      name: "Inicio",
      page: "/",
    },
    {
      name: "Registro",
      page: "/registro",
    }
  ];

  return (
    <>
      <LandingSection>
        <Breadcrum sections={sections} />
        <RegisterForm />
      </LandingSection>
    </>
  )
}

