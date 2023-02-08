import React from 'react';
import { StyledHeader } from './Header';
import {HeaderContent} from '../HeaderContent/HeaderContent.jsx';


export const Header = () => {
  return (
    <StyledHeader as="header">
      <HeaderContent />
    </StyledHeader>
  )
}
