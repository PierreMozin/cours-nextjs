import React from "react";
import { Table, Tbody, Tr, Td } from "@chakra-ui/react";

export default function Liste({ listeEnCours, slug }) {
  console.log(slug);
  return (
    <>
      <h1>{slug}</h1>
      <Table variant="simple">
        <Tbody>
          {listeEnCours.map((el) => (
            <Tr key={el.en}>
              <Td>{el.en}</Td>
              <Td>{el.fr}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.liste;
  console.log("SLUG" + slug);
  const data = await import("/data/listes.json");
  const listeEnCours = data.englishList.find((list) => list.name === slug);
  listeEnCours.data.map((el) => console.log(el));
  return { props: { listeEnCours: listeEnCours.data, slug }, revalidate: 20 };
}

export async function getStaticPaths() {
  const data = await import("/data/listes.json");
  const paths = data.englishList.map((item) => ({
    params: { liste: item.name },
  }));

  return { paths, fallback: "blocking" };
}
