import Head from "next/head";
import { useState, useEffect } from "react";
import { Table, Tbody, Tr, Td, Button } from "@chakra-ui/react";

export default function Home({ array }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    newWord();
  }, []);
  console.log(state);
  const newWord = () => {
    fetch("/api/vocapi")
      .then((re) => re.json())
      .then((data) => setState(data));
  };
  let ramdomWord;
  if (state) {
    const array = state.englishList[0].data;
    ramdomWord = array[Math.floor(Math.random() * array.length)].en;
  }
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TITRE</title>
      </Head>
      <div>
        <h1>mot au hasard</h1>
        {/* <Table variant="simple">
          <Tbody>
            {array.map((el) => (
              <Tr key={el.en}>
                <Td>{el.en}</Td>
                <Td>{el.fr}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table> */}
        <Button onClick={newWord}>get Ramdom words</Button>
        <h1>{ramdomWord}</h1>
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
