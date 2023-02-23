import React, {useRef} from 'react';
import { Spacer, useColorMode, useColorModeValue } from "@chakra-ui/react";
import {BsCartFill} from 'react-icons/bs';
import { StyledCounter, StyledHeaderContent, StyledImg, StyledMenuOptions } from './HeaderContent';
import {imgGiza} from "../../utils/parameters.js";
import { Navbar } from '../Navbar/Navbar.jsx';
import { IconButton} from '@chakra-ui/react';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';
import { colorPalette } from '../../styles/colors';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { calculateCartProductsLength } from '../../utils/subtotals.js';


export const HeaderContent = () => {

  //funcion para alternar modo oscuro / blanco
  const {colorMode, toggleColorMode} = useColorMode()

  const btnRef = useRef();

  //gestion de la vista del carrito
  const { isOpen, onOpen, onClose } = useDisclosure()

  //llamo al administrador de navegacion
  const navigate = useNavigate();

  //llamo al estado del carro para obtener todos los productos del carrito actual
  const {productsCart} = useSelector(state => state.cart);

  console.log(calculateCartProductsLength(productsCart));

  return (
    <StyledHeaderContent bg={useColorModeValue(colorPalette.light.primary,colorPalette.dark.primary)}>
      <StyledImg src={imgGiza} alt="Giza" onClick={()=> navigate("/")} />
      <Spacer />
      <StyledMenuOptions>
        <IconButton icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} aria-label='Cambiar Modo' onClick={toggleColorMode}></IconButton>
        <div style={{position:"relative"}}>
          <IconButton onClick={onOpen} ref={btnRef} icon={<BsCartFill />} aria-label="Carrito" />
          {productsCart.length>0 && <StyledCounter>{calculateCartProductsLength(productsCart)}</StyledCounter>}
        </div>
        <Navbar />
      </StyledMenuOptions>
      <ShoppingCart isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </StyledHeaderContent>
  )
}

