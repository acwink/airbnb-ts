import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .center {
    display: flex;

    width: 30%;
    overflow: hidden;

    .p-num {
      flex-shrink: 0;
      margin: 0 12px;
      width: 32px;
      height: 32px;
      line-height: 32px;

      text-align: center;
      font-size: 14px;

      border-radius: 50%;
      cursor: pointer;

      &.active {
        background-color: #222;
        color: #fff;
      }

      &:hover:not(.active) {
        background-color: #f5f5f5;
        text-decoration: underline;
      }
    }
  }

  .left {
    display: flex;
    justify-content: right;
    flex: 1;
    margin-right: 20px;
    cursor: pointer;

    .p-num {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .right {
    flex: 1;
    margin-right: auto;

    cursor: pointer;
    .p-num {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;
