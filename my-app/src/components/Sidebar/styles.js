import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 415px;
  border-right: 1px solid #ddd;
  height: 40vh;

  @media (min-width: 768px) {
    width: 35%;
    max-width: 415px;
    border-right: 1px solid #ddd;
    height: 100vh;
  }
`;
