import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import { Schedule } from "./entities/Schedule";
import { Tag } from "./entities/Tag";
import { Tour } from "./entities/Tour";
import { ScheduleResolver } from "./resolvers/Schedule.resolver";
import { TagResolver } from "./resolvers/Tag.resolver";
import { TourResolver } from "./resolvers/Tour.resolver";
import schemasIndex from "./schemas-index";

require('dotenv').config();

createConnection({
  type: "postgres",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  synchronize: false,
  logging: false,
  cache: false,
  entities: [Schedule, Tag, Tour],
})
  .then(() => {
    const server = new GraphQLServer({
      typeDefs: [
        schemasIndex
      ],
      resolvers: [ScheduleResolver, TagResolver, TourResolver],
    });

    server.start(
      { playground: "/", endpoint: "/graphql", port: process.env.PORT || 4000 },
      () => console.log("Server is running on http://localhost:4000")
    );
  })
  .catch(error => console.log(error));
