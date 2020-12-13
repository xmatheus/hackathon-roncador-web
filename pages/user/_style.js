import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const WrapperItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  padding-left: 20%;
  margin-bottom: 50px;
  cursor: pointer;
  transition: all 0.4s ease-in;

  :active {
    background-color: #fff;
  }

  p {
    margin-left: 10px;
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: #000;
  }
`;
