import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  margin-top: 50px;
`;

export const PlusButton = styled.div`
  min-width: 102px;
  min-height: 102px;

  background: #2af598;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  :hover {
    img {
      transform: scale(1.2);
    }
  }

  img {
    transition: all 0.4s ease-in;
  }
`;

export const WrapperList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 120px;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  width: 80%;
  max-width: 870px;
  justify-content: flex-start;

  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const CardNumber = styled.div`
  width: 120px;
  height: 120px;
  background-color: #b0b0b0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  p {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;

    color: #ffffff;
  }

  img {
    :hover {
      cursor: pointer;
    }
  }
`;

export const WrapperFirstText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  font-family: "Quicksand", sans-serif;
  width: 50%;
  margin-left: 20px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;

    color: #000000;
  }
`;

export const WrapperSecondText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  font-family: "Quicksand", sans-serif;
`;

export const WrapperItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  transition: all 0.4s ease-in;

  :active {
    background-color: #fff;
  }

  span {
    margin-left: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    color: #000000;
  }
`;
