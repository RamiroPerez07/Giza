import React from 'react';
import { Heading, Text, Button, Box} from '@chakra-ui/react';
import { colorPalette } from '../../styles/colors';
import { StyledHeroBox, StyledLandingSection } from './Hero.js';

export const Hero = () => {
  return (
    <>
      <StyledLandingSection as="section">
        <StyledHeroBox>
          <Heading as="h1" size='2xl' textAlign={"center"}>Giza</Heading>
          <Text fontSize='lg' textAlign={"center"}>Especialistas en lineas de perfumeria</Text>
          <Button size='lg' colorScheme={colorPalette.chakraScheme.button} mt='24px'>Nuestros productos</Button>
        </StyledHeroBox>
      </StyledLandingSection>
    </>
  )
}
