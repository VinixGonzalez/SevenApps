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
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 463px) {
    flex-direction: column;
    align-items: unset;
  }
`;

export const FormGroup = styled.div`
  margin-right: 10px;

  @media (max-width: 463px) {
    margin: 0 0 10px 0;
  }
`;

export const Input = styled.input`
  height: 40px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #00000050;
  text-align: center;
`;

export const Button = styled.button`
  height: 40px;
  padding: 5px 20px;
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
  margin: 100px;
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 300px;
  border: 1px solid #00000030;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;

  box-shadow: 10px 10px 20px -20px;

  cursor: pointer;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
