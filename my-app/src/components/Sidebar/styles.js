import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  border-right: 1px solid #ddd;
  height: 100vh;

  @media (min-width: 768px) {
    width: 33%;
    background-color: #242526;
    border-right: 0px solid #ddd;
    height: 100vh;
  }
`;
