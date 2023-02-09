import React from 'react';
import { Spacer, useColorMode, useColorModeValue } from "@chakra-ui/react";
import {BsCartFill} from 'react-icons/bs';
import { StyledHeaderContent, StyledImg, StyledMenuOptions } from './HeaderContent';
import {imgGiza} from "../../utils/parameters.js";
import { Navbar } from '../Navbar/Navbar.jsx';
import { IconButton} from '@chakra-ui/react';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';
import { colorPalette } from '../../styles/colors';


export const HeaderContent = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <StyledHeaderContent bg={useColorModeValue(colorPalette.light.primary,colorPalette.dark.primary)}>
      <StyledImg src={imgGiza} alt="Giza" />
      <Spacer />
      <StyledMenuOptions>
        <IconButton icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} aria-label='Cambiar Modo' onClick={toggleColorMode}></IconButton>
        <IconButton icon={<BsCartFill />} aria-label="Carrito" />
        <Navbar />
      </StyledMenuOptions>
    </StyledHeaderContent>
  )
}

