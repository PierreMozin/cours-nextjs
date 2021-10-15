import React from "react";
import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.slug}</h1>
      <button onClick={() => router.push("/")}>go home</button>
    </div>
  );
}
