import styled from "styled-components";

export const MyButton = styled.button`
  outline: none;
  margin: 0px;
  padding: 0px;
  background: none;
  border: none;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const WrapperPopup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  font-family: "Quicksand", sans-serif;
  height: 100%;
  width: 100%;

  h2 {
    text-align: center;
  }
`;
export const WrapperIconAndText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* width: 200px; */

  img {
    margin-right: 20px;
    width: 21px;
    height: 21px;
  }
  p {
    font-weight: 500;
  }
`;
