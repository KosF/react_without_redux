import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Header from "Containers/Header/Header";
import PagesContent from "Components/PagesContent/PagesContent";

const client = new ApolloClient({
  uri: `http://localhost:3005/graphql`
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Fragment>
          <Header />
          <PagesContent />
        </Fragment>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
