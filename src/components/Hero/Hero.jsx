import React from 'react';
import { Heading, Text, Button} from '@chakra-ui/react';
import { colorPalette } from '../../styles/colors';
import { StyledHeroBox, StyledLandingSection } from './Hero.js';
import { Carousel } from '../Carousel/Carousel.jsx';

export const Hero = () => {
  return (
    <>
      <StyledLandingSection as="section">
        <StyledHeroBox>
          <Heading as="h1" size='2xl' textAlign={"center"}>Giza</Heading>
          <Text fontSize='lg' textAlign={"center"}>Especialistas en lineas de perfumeria</Text>
          <Carousel />
          <Button size='lg' colorScheme={colorPalette.chakraScheme.button}>Nuestros productos</Button>
        </StyledHeroBox>
      </StyledLandingSection>
    </>
  )
}
