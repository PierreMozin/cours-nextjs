import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  const id = "article";

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mon application</title>
      </Head>
      <div className={styles.container}>
        <h1>Hello Moi</h1>
        <Button colorScheme="blue">Button</Button>
      </div>
    </>
  );
}
