import { Flex, Image, Box } from "@chakra-ui/react";
import styled from "styled-components";



export const StyledHeaderContent = styled(Flex)`
  width: 100%;
  max-width: 1300px;
  min-height: 80px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
`;

export const StyledImg = styled(Image)`
  width: 100%;
  max-width: 50px;
  height: 50px;
`;

export const StyledMenuOptions = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  gap: 25px;
  align-items: center;
  justify-items: center;
`;
