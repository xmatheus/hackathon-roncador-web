import { useRef, useState } from "react";
import Image from "next/image";
import Router from "next/router";

import {
  Container,
  WrapperLogo,
  Title,
  WrapperInputs,
  PlayButton,
  WrapperLocation,
  WrapperInputsLocation,
} from "./style";
import api from "../../services/api";

export default function Login() {
  const emailRef = useRef();
  const nomeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const telefoneRef = useRef();
  const categoriaRef = useRef();

  const [signup, setSignUp] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      function (err) {
        console.log(err);
      }
    );
  }

  function handleLogin() {
    const value = emailRef.current.value;

    if (value) {
      api.get(`/mascates?email=${value}`).then((response) => {
        const { data } = response;
        if (data.length > 0) {
          Router.push(`/user/${data[0].id}`);
        } else {
          setSignUp(true);

          getLocation();
        }
      });
    } else {
      alert("Preencha o email");
    }
  }

  function handleSignup() {
    const nome = nomeRef.current.value;
    const categoria = categoriaRef.current.value;
    const telefone = telefoneRef.current.value;
    const email = emailRef.current.value;

    api
      .post("/mascates", {
        nome,
        latitude: latitudeRef.current.value,
        longitude: longitudeRef.current.value,
        categoria,
        telefone,
        email,
      })
      .then((response) => {
        Router.push(`/user/${response.data.id}`);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container signup={signup}>
      <WrapperLogo>
        <Image src="/logo.svg" height={"94px"} width={"94px"} />
        <Title>MascateLytics</Title>
      </WrapperLogo>

      <WrapperInputs>
        <h3>Email</h3>
        <input type={"email"} ref={emailRef} />

        {signup && (
          <>
            <h3>Nome</h3>
            <input type={"text"} ref={nomeRef} />
            <WrapperLocation>
              <WrapperInputsLocation>
                <h3>Latitude</h3>
                <input type={"text"} ref={latitudeRef} value={latitude} />
              </WrapperInputsLocation>

              <WrapperInputsLocation>
                <h3>Longitude</h3>
                <input type={"text"} ref={longitudeRef} value={longitude} />
              </WrapperInputsLocation>
            </WrapperLocation>

            <WrapperLocation>
              <WrapperInputsLocation>
                <h3>Telefone</h3>
                <input type={"text"} ref={telefoneRef} />
              </WrapperInputsLocation>

              <WrapperInputsLocation>
                <h3>Categoria</h3>
                <input type={"text"} ref={categoriaRef} />
              </WrapperInputsLocation>
            </WrapperLocation>
          </>
        )}
      </WrapperInputs>

      <PlayButton onClick={signup ? handleSignup : handleLogin}>
        <Image src={"/play.svg"} width={"94px"} height={"94px"} />
      </PlayButton>
    </Container>
  );
}
