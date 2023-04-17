import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backgroundColor: #2D2727;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(5px);
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 50%;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #f3f3f3;
    cursor: pointer;
  }
`;
