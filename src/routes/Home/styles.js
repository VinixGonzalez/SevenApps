import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormGroup = styled.div`
  margin: 20px 5px;
`;

export const Input = styled.input`
  height: 40px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #00000050;
`;

export const Button = styled.button`
  height: 40px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #00000050;
  color: #fff;
  background: #0095ae;
  letter-spacing: 2px;
  font-size: 16px;
  transition: background 0.5s ease;

  &:hover {
    background: #15095b;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
