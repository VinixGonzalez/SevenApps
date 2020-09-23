import styled from "styled-components";

export const Content = styled.div`
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
