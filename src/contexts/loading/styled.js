import styled from "styled-components";

// JSS (là CSS in JS)
export const WrapperSpin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.customBackground};
  z-index: 999;
`;
