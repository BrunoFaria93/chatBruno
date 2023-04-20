import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #191818;
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
  border: none;
  border-radius: 200px;
  background: #73665A;
  width: 100%;
  color: #CBB088;
  font-weight: bold;
  span {
  }
`;
