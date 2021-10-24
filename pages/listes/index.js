import React from "react";
import Link from "next/link";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
} from "@chakra-ui/react";

export default function Index({ data }) {
  return (
    <div>
      <Box w="100%" p={4}>
        <h1>Les listes de vocabulaire</h1>
        <UnorderedList>
          {data.map((el) => (
            <ListItem key={el.name}>
              <Link href={`/listes/${el.name}`}>{el.name}</Link>
            </ListItem>
          ))}
        </UnorderedList>{" "}
      </Box>
    </div>
  );
}

export async function getStaticProps() {
  const liste = await import(`/data/listes.json`);
  const data = liste.englishList;
  return { props: { data } };
}
