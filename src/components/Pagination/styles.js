import styled from "styled-components";

export const Content = styled.div`
  .pagination {
    display: flex;
    margin: 20px auto;

    li {
      & + .active {
        background: #15095b;
      }

      transition: all 0.5s ease;
      background: #0097b0;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      margin: 0 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      &:hover {
        background: #15095b90;
      }

      a {
        font-size: 12px;
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;
