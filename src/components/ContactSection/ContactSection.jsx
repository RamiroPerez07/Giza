import React from 'react';
import { LandingSection } from '../LandingSection/LandingSection.jsx';
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import { Map } from '../Map/Map.jsx';
import { StyledContactContainer } from './ContactSection.js';

export const ContactSection = () => {
  return (
    <>  
      <LandingSection>
        <StyledContactContainer columns={2} spacing="25px" minChildWidth="300px">
          <ContactForm />
          <Map />
        </StyledContactContainer>
      </LandingSection>
    </>
  )
}

