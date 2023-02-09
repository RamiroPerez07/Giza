import styled from "styled-components";
import { Box } from '@chakra-ui/react';

export const StyledHeader = styled(Box)`
  width: 100%;
  min-height: 80px;
  display: grid;
  align-items: start;
  justify-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
`;