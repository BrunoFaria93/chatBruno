import styled from "styled-components";

export const Container = styled.div`
  background-color: #191818;  
  bottom: 0;
  width: 100%;
  padding: 15px 5px 15px 5px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 20px;
  width: 95%;
  box-shadow: inset 0 0 1px 1px #0003;
  background-color: #73665a;
  text-color: white;
  
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #CBB088;
  opacity: 1; /* Firefox */
}
`;
