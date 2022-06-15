import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Header from "../components/Header";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
