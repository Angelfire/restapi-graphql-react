import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql';

import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3001/api/v1';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A simple user',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The user id',
      resolve: user => user.id
    },
    name: {
      type: GraphQLString,
      description: 'The user name',
      resolve: user => user.name
    },
    username: {
      type: GraphQLString,
      description: 'The username for the user',
      resolve: user => user.username
    },
    email: {
      type: GraphQLString,
      description: 'The user email',
      resolve: user => user.email
    }
  })
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query of all',
  fields: () => ({
    Users: {
      type: new GraphQLList(UserType),
      resolve: () => fetch(`${ BASE_URL }/users`)
        .then(response => response.json())
        .then(data => data.data)
    },
    User: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: (root, args) => fetch(`${ BASE_URL }/users/${ args.id }`)
        .then(response => response.json())
        .then(data => data.data)
    }
  })
});

export default new GraphQLSchema({
  query: QueryType
});
