import { StyledSimpleGrid } from './CheckoutSection.js';
import React from 'react';
import { CheckoutDetail } from '../CheckoutDetail/CheckoutDetail.jsx';
import { CheckoutForm } from '../CheckoutForm/CheckoutForm.jsx';
import {LandingSection} from '../LandingSection/LandingSection.jsx';
import { Breadcrum } from '../Breadcrum/Breadcrum.jsx';

export const CheckoutSection = () => {

  const sections = [
    {
      name: "Inicio",
      page: "/",
    },
    {
      name: "Productos",
      page: "/productos",
    },
    {
      name: "Confirmar pedido",
      page: "/confirmar-pedido",
    }
  ]

  return (
    <>
      <LandingSection>
        <Breadcrum sections={sections} />
        <StyledSimpleGrid w="full" minChildWidth="300px">
          <CheckoutDetail />
          <CheckoutForm />
        </StyledSimpleGrid>
      </LandingSection>
    </>
  )
}

