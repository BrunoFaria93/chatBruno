import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  border-right: 1px solid #ddd;
  height: 100vh;
  background-color: #0F0E0E;

  @media (min-width: 768px) { 
    width: 35%;
    background-color: white;
    border-right: 0px solid #ddd;
    height: 100vh;
  }
`;
