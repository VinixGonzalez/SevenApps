import styled from "styled-components";

export const Content = styled.div`
  .pagination {
    display: flex;
    margin: 20px auto;

    li {
      & + .active {
        background: #15095b;

        a {
          color: #fff;
        }
      }

      &:nth-child(1) {
        background: #0097b020;
      }
      &:nth-child(2) {
        background: #0097b020;
      }
      &:last-child {
        background: #0097b020;
      }
      &:nth-last-child(2) {
        background: #0097b020;
      }

      border: 1px solid #0097b0;
      transition: all 0.5s ease;
      background: #fff;
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
        a {
          color: #fff;
        }
      }

      a {
        font-size: 12px;
        color: #0097b0;
        text-decoration: none;
      }
    }
  }
`;
