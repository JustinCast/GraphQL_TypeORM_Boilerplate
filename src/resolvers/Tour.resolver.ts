import { getRepository } from "typeorm";
import { Tour } from "../entities/Tour";
import { ScheduleResolver } from "./Schedule.resolver";
import { TagResolver } from "./Tag.resolver";

/**
 * parent: usado para comunicar 'parent' resolver con 'child' resolvers,
 * por ejemplo: cuando se desean traer objetos hijos en base a una condición del objeto padre (id por ejemplo)
 * args: argumentos del query o mutation
 * context: objeto que es usado por los resolver en una Query particular,
 * se utiliza, entre otras cosas para pasar datos de autenticación
 */
export const TourResolver = {
  Query: {
    async tours(parent: any, args: any, context: any) {
      return await getRepository(Tour).find({
        relations: ["schedules", "tags"], // miembros de la clase
      });
    },
    async tour(parent: any, args: any, context: any) {
      return await getRepository(Tour).findOne({
        relations: ["schedules", "tags"],
        where: `Tour.id = ${args.id}`,
      });
    },
  },
  Tour: {
    async schedules(parent: any, args: any, context: any) {
      return ScheduleResolver.Query.schedules(parent, args, context);
    },
    async tags(parent: any, args: any, context: any) {
      return TagResolver.Query.tags(parent, args, context);
    },
  },
};
