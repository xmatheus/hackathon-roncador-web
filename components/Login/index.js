import Image from "next/image";

import {
  Container,
  WrapperLogo,
  Title,
  WrapperInputs,
  PlayButton,
} from "./style";

export default function Login() {
  return (
    <Container>
      <WrapperLogo>
        <Image src="/logo.svg" height={"94px"} width={"94px"} />
        <Title>MascateLytics</Title>
      </WrapperLogo>

      <WrapperInputs>
        <h3>Email</h3>
        <input type={"email"} />
      </WrapperInputs>

      <PlayButton>
        <Image src={"/play.svg"} width={"94px"} height={"94px"} />
      </PlayButton>
    </Container>
  );
}
