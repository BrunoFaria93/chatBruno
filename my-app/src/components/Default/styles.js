import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(
    109.6deg,
    rgb(43, 1, 91) 13.4%,
    rgb(122, 2, 54) 100.2%
  );
  color: white;
  img {
    width: 200px;
    height: 200px;
    animation: float 2s ease infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(10px);
    }

    50% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(10px);
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Info = styled.span`
  font-size: 18px;
  text-align: center;
  max-width: 500px;
`;
