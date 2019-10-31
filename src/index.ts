import "reflect-metadata"; //necesario para permitir decoradores

// zona de imports
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import { Schedule } from "./entities/Schedule";
import { Tag } from "./entities/Tag";
import { Tour } from "./entities/Tour";
import { ScheduleResolver } from "./resolvers/Schedule.resolver";
import { TagResolver } from "./resolvers/Tag.resolver";
import { TourResolver } from "./resolvers/Tour.resolver";
import schemasIndex from "./schemas-index";

require('dotenv').config(); // configuración de variables de entorno

// se crea la conexion
createConnection({
  type: "postgres", // se especifica el tipo de driver a usar
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  synchronize: false, // si se desea sincronizar automáticamente los entities con la base de datos, configurar en true
  logging: false,
  cache: false,
  entities: [Schedule, Tag, Tour], // array donde se importan los entities
})
  .then(() => {
    const server = new GraphQLServer({
      typeDefs: [
        schemasIndex // archivo con todos los schemas unidos
      ],
      resolvers: [ScheduleResolver, TagResolver, TourResolver], // array donde se especifican todos los resolvers
    });

    server.start(
      { playground: "/", endpoint: "/graphql", port: process.env.PORT || 4000 },
      () => console.log("Server is running on http://localhost:4000")
    );
  })
  .catch(error => console.log(error));
