import React from 'react';
import { Heading, Stack, Text, Button } from '@chakra-ui/react';
import { LandingSection } from '../LandingSection/LandingSection.jsx';
import { StyledImg } from './CongratulationsSection.js';
import { imgGiza } from '../../utils/parameters.js';
import { useNavigate } from 'react-router-dom';
import { colorPalette } from '../../styles/colors.js';

export const CongratulationsSection = () => {
  const navigate = useNavigate();
  return (
    <LandingSection>
      <Stack spacing="25px" alignItems="center" mt="30px">
        <Heading textAlign="center">¡Felicitaciones!</Heading>
        <Text textAlign="center">Tu pedido fue realizado con éxito.</Text>
        <StyledImg src={imgGiza} alt="Giza" onClick={()=> navigate("/")} />
        <Text textAlign="center">¡Muchas gracias por confiar en Giza!</Text>
        <Button onClick={()=>navigate("/pedidos")} variant='solid' colorScheme={colorPalette.chakraScheme.button}>Mis pedidos</Button>
      </Stack>
    </LandingSection>
  )
}

