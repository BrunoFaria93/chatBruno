import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #191818;
  overflow-y: auto;

  @media (min-width: 768px) {
    background-color: #0F0E0E;
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
