import styled from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 450px;
  display: grid;
  gap: 20px;
  grid-auto-rows: min-content;
`;