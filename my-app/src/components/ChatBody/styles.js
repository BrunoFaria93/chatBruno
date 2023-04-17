import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  // background-image: url("/zap-dark-wallpaper.jpg");
  background-color: #0F0E0E;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
