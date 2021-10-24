import React from "react";

export default function Cours({ results }) {
  console.log(results);
  return (
    <div>
      <h1>le BTC est à : {results.bpi.EUR.rate}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context);

  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

  const results = await data.json();

  return {
    props: {
      results,
    },
  };
}
