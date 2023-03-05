import React from 'react';
import {LandingSection} from '../LandingSection/LandingSection.jsx';
import { Breadcrum } from '../Breadcrum/Breadcrum.jsx';
import { RecoverPasswordForm } from '../RecoverPasswordForm/RecoverPasswordForm.jsx';

export const RecoverPasswordSection = () => {
  const sections = [
    {
      name: "Inicio",
      page: "/",
    },
    {
      name: "Restablecer contraseña",
      page: "/restablecer-clave",
    }
  ];

  return (
    <>
      <LandingSection>
        <Breadcrum sections={sections} />
        <RecoverPasswordForm />
      </LandingSection>
    </>
  )
}

