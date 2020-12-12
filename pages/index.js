import Head from "next/head";
import styles from "../styles/Home.module.css";
import Map from "../components/Maps";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MascateLystics</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Map token={process.env.REACT_APP_MAPBOX_TOKEN} />
    </div>
  );
}

export async function getStaticProps() {
  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`
  console.log(
    "[Node.js only] ENV_VARIABLE:",
    process.env.REACT_APP_MAPBOX_TOKEN
  );
  console.log(
    "[Node.js only] ENV_LOCAL_VARIABLE:",
    process.env.ENV_LOCAL_VARIABLE
  );

  return { props: {} };
}
