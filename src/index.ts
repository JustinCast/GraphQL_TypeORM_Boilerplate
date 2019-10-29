import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";

createConnection({
  type: "postgres",
  host: "104.197.49.69",
  database: "bookyourtrip",
  username: "postgres",
  password: "12345",
  synchronize: false,
  logging: false,
  cache: false,
  entities: []
})
  .then(() => {
    const server = new GraphQLServer({
      typeDefs: [],
      resolvers: [
      ]
    });

    server.start(
      { playground: "/", endpoint: "/graphql", port: process.env.PORT || 4000 },
      () => console.log("Server is running on http://localhost:4000")
    );
  })
  .catch(error => console.log(error));