import styled from "styled-components";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;
  word-break: break-all;
  white-space: pre-wrap;
  &.me {
    > div {
      background: linear-gradient(109.6deg, #dd5e89 13.4%, #f7bb97 80.2%);
    }
    justify-content: right;
  }
`;

export const Content = styled.div`
  background: linear-gradient(109.6deg, #a8c0ff 13.4%, #3f2b96 70.2%);

  border-radius: 10px;
  box-shadow: 0 1px 1px #dd5e89;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;
`;

export const Message = styled.span`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.span`
  font-size: 11px;
  color: black;
  text-align: right;
  height: 15px;
  margin: -5px 5px 0;
`;
