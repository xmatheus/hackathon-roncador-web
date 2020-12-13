import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

import MenuLeft from "../../components/MenuLeft";

import Fornecedor from "../../components/Fornecedor";

export default function User() {
  const router = useRouter();
  const [component, setComponent] = useState();

  const { id } = router.query;
  return (
    <Container>
      <MenuLeft>
        <WrapperItem onClick={() => setComponent(<Fornecedor userId={id} />)}>
          <Image src="/fornecedor.svg" width={"39px"} height={"39px"} />
          <p>Fornecedor</p>
        </WrapperItem>

        <WrapperItem>
          <Image src="/box.svg" width={"39px"} height={"39px"} />
          <p>Produtos</p>
        </WrapperItem>

        <WrapperItem>
          <Image src="/trade.svg" width={"39px"} height={"39px"} />
          <p>Vendas</p>
        </WrapperItem>
      </MenuLeft>
      {component}
    </Container>
  );
}

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const WrapperItem = styled.div`
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
