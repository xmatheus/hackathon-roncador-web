import styled from "styled-components";

export const Container = styled.div`
  min-width: 297px;
  height: 90%;
  margin-left: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(-180deg, #2af598 0%, #009efd 100%);
  box-shadow: 0px 15.9771px 35.5048px -10.6514px #054c2f;
  border-radius: 22.1905px;
`;

export const WrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  img {
    margin-top: 22px;
    width: 80px;
    height: 80px;
    @media (max-width: 728px) {
      width: 70px;
      height: 70px;
      margin-top: 0px;
    }
  }
`;
