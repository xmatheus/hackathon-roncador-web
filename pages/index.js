import Head from "next/head";
import styled from "styled-components";

import Map from "../components/Maps";
import Login from "../components/Login";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>MascateLystics</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Login />
      <Map token={process.env.REACT_APP_MAPBOX_TOKEN} />
    </Container>
  );
}
