import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import  * as Query from './Query';

const app: Application = express();
app.use(cors());

const port: number | string = process.env.PORT || 5000;
const urlPath: string = '/graphql';

const resolvers = {
  Query
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  introspection: true,
});

server.applyMiddleware({app, path: urlPath});

app.listen(port, (): void =>
  console.log(`Server running at http://localhost:${port}${urlPath}`)
);
