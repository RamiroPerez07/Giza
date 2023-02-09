import React from 'react';
import { StyledHeader } from './Header';
import {HeaderContent} from '../HeaderContent/HeaderContent.jsx';
import { colorPalette } from '../../styles/colors';
import { useColorModeValue } from '@chakra-ui/react';


export const Header = () => {
  return (
    <StyledHeader as="header" bg={useColorModeValue(colorPalette.light.primary,colorPalette.dark.primary)}>
      <HeaderContent />
    </StyledHeader>
  )
}
