import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const StyledLandingSection = styled(Box)`
  width: 100%;
  max-width: 1300px;
  display: grid;
  justify-items: center;
  padding: 10px;
  min-height: calc(min(1020px, 100vh) - 80px);
  grid-auto-rows: min-content;
`;