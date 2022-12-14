import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 15px 20px;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.2);

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background-color: #f0f2f5;
  }

  svg {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }

  &.active {
    background-color: #f0f2f5;
  }
`;

export const Name = styled.span`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #f3f3f3;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;
