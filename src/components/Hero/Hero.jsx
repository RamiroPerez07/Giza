import React from 'react';
import { Heading, Text, Button} from '@chakra-ui/react';
import { colorPalette } from '../../styles/colors';
import { StyledHeroBox } from './Hero.js';
import { Carousel } from '../Carousel/Carousel.jsx';
import {LandingSection} from '../LandingSection/LandingSection.jsx';

export const Hero = () => {
  return (
    <>
      <LandingSection as="section">
        <StyledHeroBox>
          <Heading as="h1" size='2xl' textAlign={"center"}>Giza</Heading>
          <Text fontSize='lg' textAlign={"center"}>Especialistas en lineas de perfumeria</Text>
          <Carousel />
          <Button size='lg' colorScheme={colorPalette.chakraScheme.button}>Nuestros productos</Button>
        </StyledHeroBox>
      </LandingSection>
    </>
  )
}
