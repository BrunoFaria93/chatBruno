import styled from "styled-components";

export const Container = styled.div`
  background-color: #242526;
  overflow-y: auto;
  color: #e4e6eb;
  flex: 1;

  @media (min-width: 768px) {
    background-color: #191717;
  }

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
