import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Quicksand", sans-serif;
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-bottom: 46px;

  h3 {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24.8533px;
    margin-bottom: 12px;
    color: #043b24;

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
    border: 0.2px solid #000;
    background: #ffffff;
    border-radius: 8.87px;
    height: 58px;
    width: 100%;
    outline: none;
    padding-left: 10px;
    font-size: 20px;
  }
`;

export const WrapperLocation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  :nth-last-child(2) {
    margin-bottom: 46px;
  }
`;

export const WrapperInputsLocation = styled(WrapperInputs)`
  width: auto;
  margin: 0px;
  padding: 0px;
  margin-bottom: 46px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CloseButton = styled.button`
  width: 238px;
  height: 74px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  background: none;

  font-style: normal;
  font-weight: bold;
  font-size: 24.8533px;
  color: #000000;
  cursor: pointer;
  outline: none;
`;

export const AddButton = styled.button`
  width: 238px;
  height: 74px;
  background: #2af598;
  box-shadow: 0px 15.9771px 35.5048px -10.6514px #2af598;
  border-radius: 10px;

  font-style: normal;
  font-weight: bold;
  font-size: 24.8533px;
  color: #000000;
  cursor: pointer;
  outline: none;
`;
