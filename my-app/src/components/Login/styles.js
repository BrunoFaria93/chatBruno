import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #242526;
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 200px;
    height: 200px;
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
  color: #e4e6eb;
  font-weight: bold;
  span {
  }
`;
