import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

import MenuLeft from "../../components/MenuLeft";
import { Container, WrapperItem } from "./_style";

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
