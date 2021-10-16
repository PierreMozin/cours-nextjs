import React from "react";
import { useRouter } from "next/router";
import Head from "next/dist/shared/lib/head";

export default function Article() {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.query.slug}</title>
      </Head>
      <div>
        <h1>{router.query.slug}</h1>
        <button onClick={() => router.push("/")}>go home</button>
      </div>
    </>
  );
}
