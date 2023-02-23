import React, {useRef} from 'react';
import { Spacer, useColorMode, useColorModeValue } from "@chakra-ui/react";
import {BsCartFill} from 'react-icons/bs';
import { StyledHeaderContent, StyledImg, StyledMenuOptions } from './HeaderContent';
import {imgGiza} from "../../utils/parameters.js";
import { Navbar } from '../Navbar/Navbar.jsx';
import { IconButton} from '@chakra-ui/react';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';
import { colorPalette } from '../../styles/colors';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export const HeaderContent = () => {

  //funcion para alternar modo oscuro / blanco
  const {colorMode, toggleColorMode} = useColorMode()

  const btnRef = useRef();

  //gestion de la vista del carrito
  const { isOpen, onOpen, onClose } = useDisclosure()

  //llamo al administrador de navegacion
  const navigate = useNavigate();

  return (
    <StyledHeaderContent bg={useColorModeValue(colorPalette.light.primary,colorPalette.dark.primary)}>
      <StyledImg src={imgGiza} alt="Giza" onClick={()=> navigate("/")} />
      <Spacer />
      <StyledMenuOptions>
        <IconButton icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} aria-label='Cambiar Modo' onClick={toggleColorMode}></IconButton>
        <IconButton onClick={onOpen} ref={btnRef} icon={<BsCartFill />} aria-label="Carrito" />
        <Navbar />
      </StyledMenuOptions>
      <ShoppingCart isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </StyledHeaderContent>
  )
}

