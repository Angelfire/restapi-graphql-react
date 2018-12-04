import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';

import schema from './schema'

const APP_PORT = 5000;

const app  = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(graphqlHTTP({
    graphiql: true,
    schema,
    pretty: true
}));

try {
  app.listen(APP_PORT, () => console.log(`GraphQL server running at ${APP_PORT}`))
} catch (error) {
  console.log(`Something went wrong ${error}`)
}