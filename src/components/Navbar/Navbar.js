import styled from "styled-components";
import { Box, IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { colorPalette } from "../../styles/colors";
import { breakpoints as mq } from "../../styles/media-queries";

export const StyledNavbar = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  gap: 15px;
  align-items: center;
  justify-items: center;

  @media (max-width: ${mq.tablet}){
    position: fixed;
    top: 80px;
    left: ${(props)=> props.showBurgerMenu ? "0px" : "-100%"};
    transition: left 0.3s linear;
    width: 100%;
    grid-auto-flow: row;
    gap: 25px;
    padding: 20px 10px;
  }

`;

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.colormode === "light"? colorPalette.light.secondary: colorPalette.dark.secondary };
  font-weight: 500;
  font-size: 1.1rem;
  text-align: center;
  &.active{
    color: ${(props) => props.colormode === "light"? colorPalette.light.terciary: colorPalette.dark.terciary };
  }
  &:hover{
    color: ${(props) => props.colormode === "light"? colorPalette.light.terciary: colorPalette.dark.terciary };
  }
`;

export const StyledBurgerIcon = styled(IconButton)`
  &.burger-icon{
    display: none;
  }

  @media (max-width: ${mq.tablet}){
    &.burger-icon{
    display: block;
  }
  }
`;
