import React from "react";

export default function Contact({ data }) {
  console.log(data);

  return (
    <div>
      <h1>{data[0].q}</h1>
    </div>
  );
}

export async function getStaticProps() {
  const quote = await fetch("https://zenquotes.io/api/random");
  const data = await quote.json();
  return { props: { data }, revalidate: 10 };
}
