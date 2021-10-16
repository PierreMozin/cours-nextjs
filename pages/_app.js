import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Container from "../components/Container/Container";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>{" "}
    </Container>
  );
}

export default MyApp;
