import styled from "styled-components";

export const StyledStatus = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  height: 18px;
  width: 18px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;