import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  overflow-y: auto;
  background: linear-gradient(
    109.6deg,
    rgb(43, 1, 91) 13.4%,
    rgb(122, 2, 54) 100.2%
  );
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    height: calc(100vh - 70px);
    overflow-y: auto;

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
