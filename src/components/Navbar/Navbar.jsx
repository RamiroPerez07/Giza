import { useColorMode } from '@chakra-ui/react';
import React, {useRef} from 'react';
import { StyledNavbar,StyledNavLink, StyledBurgerIcon } from './Navbar.js';
import { Button } from '@chakra-ui/react';
import {CgLogIn} from 'react-icons/cg';
import {FaUserPlus} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBurgerMenu } from '../../redux/actions/menu-manager-actions.js';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';
import { colorPalette } from '../../styles/colors.js';
import { useOnClickOutside } from '../../hooks/menu-burger-hook.js';

export const Navbar = () => {
  //llamo al hook para utilizar el estado del modo de color actual
  const {colorMode} = useColorMode();

  //llamo a mi estado en redux para saber si el menu esta abierto
  const {showBurgerMenu} = useSelector(state => state.menuManager)

  //llamo a la funcion despachadora de acciones
  const dispatch = useDispatch();

  //establezco una referencia
  const node = useRef()

  //con esta funcion (custom hook) agrego la funcionalidad de ocultarse con un evento especifico, en este caso click fuera del menu
  useOnClickOutside(node, () => dispatch(toggleBurgerMenu()));

  return (
    <>
      {<StyledBurgerIcon className="burger-icon" icon={!showBurgerMenu ? <HamburgerIcon w={5} h={5} /> : <CloseIcon w={3} h={3} />} aria-label='Abrir Menu' onClick={()=>dispatch(toggleBurgerMenu())} />}
      <StyledNavbar as='nav' style={{backgroundColor:useColorModeValue(colorPalette.light.primary,colorPalette.dark.primary)}} showBurgerMenu={showBurgerMenu} onClick={()=>dispatch(toggleBurgerMenu())} ref={node}>
        <StyledNavLink colormode={colorMode} className={({ isActive }) => (isActive ? "active" : "")} to={'/'}>Inicio</StyledNavLink>
        <StyledNavLink colormode={colorMode} className={({ isActive }) => (isActive ? "active" : "")} to={'/productos'}>Productos</StyledNavLink>
        <StyledNavLink colormode={colorMode} className={({ isActive }) => (isActive ? "active" : "")} to={'/contacto'}>Contacto</StyledNavLink>
        <Button leftIcon={<CgLogIn />} colorScheme={'teal'}>Ingresar</Button>
        <Button leftIcon={<FaUserPlus />} variant="outline">Registro</Button>
      </StyledNavbar>
    </>
  )
}

