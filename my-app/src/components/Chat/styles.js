import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-x:hidden;
  @media (min-width: 768px) {
    background-color: #0F0E0E;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: black;
    height: 10vh;

    p {
      color: white;
    }
  }
`;
