import React from 'react';
import { LandingSection } from '../LandingSection/LandingSection.jsx';
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import { Map } from '../Map/Map.jsx';
import { StyledContactContainer } from './ContactSection.js';
import { Breadcrum } from '../Breadcrum/Breadcrum.jsx';


export const ContactSection = () => {
  const sections = [
    {
      name: "Inicio",
      page: "/",
    },
    {
      name: "Contacto",
      page: "/contacto",
    }
  ]
  return (
    <>  
      <LandingSection>
        <Breadcrum sections={sections} />
        <StyledContactContainer columns={2} spacing="25px" minChildWidth="300px">
          <ContactForm />
          <Map />
        </StyledContactContainer>
      </LandingSection>
    </>
  )
}

