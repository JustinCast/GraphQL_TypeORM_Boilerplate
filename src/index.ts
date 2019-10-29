import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import { Schedule } from "./entities/Schedule";
import { Tag } from "./entities/Tag";
import { Tour } from "./entities/Tour";
import { ScheduleResolver } from "./resolvers/Schedule.resolver";
import { TagResolver } from "./resolvers/Tag.resolver";
import { TourResolver } from "./resolvers/Tour.resolver";

createConnection({
  type: "postgres",
  host: "",
  database: "",
  username: "",
  password: "",
  synchronize: false,
  logging: false,
  cache: false,
  entities: [Schedule, Tag, Tour],
})
  .then(() => {
    const server = new GraphQLServer({
      typeDefs: [],
      resolvers: [ScheduleResolver, TagResolver, TourResolver],
    });

    server.start(
      { playground: "/", endpoint: "/graphql", port: process.env.PORT || 4000 },
      () => console.log("Server is running on http://localhost:4000")
    );
  })
  .catch(error => console.log(error));
