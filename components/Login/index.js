import { useRef } from "react";
import Image from "next/image";
import Router from "next/router";

import {
  Container,
  WrapperLogo,
  Title,
  WrapperInputs,
  PlayButton,
} from "./style";
import api from "../../services/api";

export default function Login() {
  const inputRef = useRef();

  function handleLogin() {
    const value = inputRef.current.value;

    if (value) {
      api.get(`/mascates?email=${value}`).then((response) => {
        const { data } = response;
        if (data.length > 0) {
          Router.push(`/user/${data[0].id}`);
        } else {
          alert("User not found");
        }
      });
    } else {
      alert("Preencha o email");
    }
  }

  return (
    <Container>
      <WrapperLogo>
        <Image src="/logo.svg" height={"94px"} width={"94px"} />
        <Title>MascateLytics</Title>
      </WrapperLogo>

      <WrapperInputs>
        <h3>Email</h3>
        <input type={"email"} ref={inputRef} />
      </WrapperInputs>

      <PlayButton onClick={handleLogin}>
        <Image src={"/play.svg"} width={"94px"} height={"94px"} />
      </PlayButton>
    </Container>
  );
}
