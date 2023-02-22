import React from 'react';
import { CheckoutDetail } from '../CheckoutDetail/CheckoutDetail.jsx';
import { CheckoutForm } from '../CheckoutForm/CheckoutForm.jsx';
import {LandingSection} from '../LandingSection/LandingSection.jsx';
import { Breadcrum } from '../Breadcrum/Breadcrum.jsx';
import { Flex, Spacer } from '@chakra-ui/react';
import { StyledSimpleGrid } from './CheckoutSection.js';

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
        <StyledSimpleGrid w="full" minChildWidth='300px' columns={2} spacingX="25px" spacingY="40px" p="20px">
          <CheckoutDetail />
          <CheckoutForm />
        </StyledSimpleGrid>
      </LandingSection>
    </>
  )
}

