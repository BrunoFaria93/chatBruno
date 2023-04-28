import styled from "styled-components";

export const Container = styled.div`
  background-color: #191818;
  overflow-y: auto;
  flex: 1;

  @media (min-width: 768px) {
    background-color: #0f0e0e;
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
