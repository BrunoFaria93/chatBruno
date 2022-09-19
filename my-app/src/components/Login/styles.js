import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    109.6deg,
    rgb(43, 1, 91) 13.4%,
    rgb(122, 2, 54) 100.2%
  );
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 300px;
    height: 300px;
    animation: float 2s ease infinite;
    margin-bottom: 100px;
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

export const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  outline: none;
  font-size: 18px;
  padding: 14px 18px;
  cursor: pointer;
  background: radial-gradient(
    328px at 2.9% 15%,
    rgb(191, 224, 251) 0%,
    rgb(232, 233, 251) 25.8%,
    rgb(252, 239, 250) 50.8%,
    rgb(234, 251, 251) 77.6%,
    rgb(240, 251, 244) 100.7%
  );
  border: none;
  border-radius: 200px;
  width: 100%;
  color: #742f37;
  font-weight: bold;
  span {
  }
`;
