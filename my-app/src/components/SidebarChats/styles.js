import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  overflow-y: auto;
  background: #242526;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    height: calc(100vh - 110px);
    overflow-y: auto;
    overflow-x: hidden;
    width: 32vw;
    &::-webkit-scrollbar {
      width: 6px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Content = styled.div``;

export const Divider = styled.div`
  margin: 0 10px;
`;
