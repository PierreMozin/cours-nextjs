import Head from "next/head";
import { Table, Tbody, Tr, Td } from "@chakra-ui/react";

export default function Home({ array }) {
  console.log(array);
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TITRE</title>
      </Head>
      <div>
        <h1>vocabulaire de base</h1>
        <Table variant="simple">
          <Tbody>
            {array.map((el) => (
              <Tr key={el.en}>
                <Td>{el.en}</Td>
                <Td>{el.fr}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`/data/vocabulary.json`);
  const array = data.vocabulary;

  return {
    props: { array },
  };
}
