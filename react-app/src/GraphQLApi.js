import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Users from './Users';

const client = new ApolloClient({
  uri: 'http://localhost:5000'
});

const GraphQLApi = () => (
  <ApolloProvider client={ client }>
    <div className="graphqlapi">
      <h2>GraphQL with Apollo Data</h2>
      <Users />
    </div>
  </ApolloProvider>
);

export default GraphQLApi;
