import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &:hover {
  }

  &.active {
  }
`;

export const ImagePhoto = styled.img`
  border-radius: 9999px;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  margin-top: 15px;
`