import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 573px;
  width: 466px;
  left: 20%;
  top: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: linear-gradient(-180deg, #2af598 0%, #009efd 100%);
  box-shadow: 0px 15.9771px 35.5048px -10.6514px #054c2f;
  border-radius: 22.1905px;
  z-index: 2;
  transform: translate(-50%, -50%);

  @media (max-width: 1200px) {
    left: 30%;
  }
  @media (max-width: 728px) {
    width: 60%;
    height: 70%;
    left: 35%;
  }

  @media (max-width: 550px) {
    width: 80%;
    height: 70%;
    left: 50%;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 21px;
    @media (max-width: 728px) {
      width: 70px;
      height: 70px;
    }
  }
`;

export const Title = styled.div`
  font-family: "Quicksand", sans-serif;

  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 0.02em;
  color: #054d2f;

  @media (max-width: 728px) {
    font-size: 34px;
  }
  @media (max-width: 550px) {
    font-size: 28px;
  }
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;

  h3 {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24.8533px;
    margin: 0px;
    margin-bottom: 10px;
    color: #054d2f;
  }

  input {
    background: #ffffff;
    border-radius: 8.87px;
    height: 58px;
    width: 100%;
    border: none;
    outline: none;
    padding-left: 10px;
    font-size: 20px;
  }
`;

export const PlayButton = styled.div`
  width: 63px;
  height: 70px;
  filter: drop-shadow(-2px 5px 10px #054d2f);
  cursor: pointer;
`;
