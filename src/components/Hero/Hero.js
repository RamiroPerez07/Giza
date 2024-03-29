import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const StyledHeroBox = styled(Box)`
  width: 95%;
  max-width: 1300px;
  display: grid;
  gap: 10px;
  grid-auto-rows: min-content;
  justify-items: center;
  align-items: start;
  align-self: center;
`;