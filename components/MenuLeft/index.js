import Image from "next/image";

import { Container, WrapperLogo } from "./style";

export default function MenuLeft({ children }) {
  return (
    <Container>
      <WrapperLogo>
        <Image src="/logo.svg" height={"80px"} width={"80px"} />
      </WrapperLogo>

      {children}
    </Container>
  );
}
