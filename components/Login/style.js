import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  max-width: 90%;
  height: ${(props) => (props.signup ? "93%" : "573px")};
  width: ${(props) => (props.signup ? "800px" : "466px")};
  left: 5%;
  top: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: linear-gradient(-180deg, #2af598 0%, #009efd 100%);
  box-shadow: 0px 15.9771px 35.5048px -10.6514px #054c2f;
  border-radius: 22.1905px;
  z-index: 2;
  transform: translate(0%, -50%);
  transition: all 0.4s ease-in;

  @media (max-width: 1200px) {
    /* left: 30%; */
  }
  @media (max-width: 728px) {
    width: 60%;
    height: ${(props) => (props.signup ? "99%" : "60%")};
    overflow-y: auto;
    transform: translate(-50%, -50%);
    left: 50%;
    /* left: 35%; */
  }

  @media (max-width: 550px) {
    width: 80%;
    height: 70%;
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
      margin-top: 0px;
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
    font-size: 30px;
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

    @media (max-width: 728px) {
      font-size: 20px;
    }

    :nth-of-type(2) {
      margin-top: 30px;
      @media (max-width: 728px) {
        margin-top: 10px;
        margin-bottom: 5px;
      }
    }
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

export const WrapperLocation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 728px) {
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 10px;
  }
`;

export const WrapperInputsLocation = styled(WrapperInputs)`
  width: auto;
  margin: 0px;
  padding: 0px;

  :nth-of-type(1) {
    margin-top: 10px;
  }

  @media (max-width: 728px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  input {
    width: 100%;
    max-width: 300px;
    @media (max-width: 728px) {
      max-width: 100%;
    }
  }
`;
