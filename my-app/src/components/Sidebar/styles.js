import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  border-right: 1px solid #ddd;
  height: 100vh;
  background-color: #0f0e0e;

  @media (min-width: 768px) {
    width: 33%;
    background-color: #191818;
    border-right: 0px solid #ddd;
    height: 100vh;
  }
`;
