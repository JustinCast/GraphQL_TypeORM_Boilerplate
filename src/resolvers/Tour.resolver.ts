import { getRepository } from "typeorm";
import { Tour } from "../entities/Tour";
import { ScheduleResolver } from "./Schedule.resolver";
import { TagResolver } from "./Tag.resolver";

export const TourResolver = {
  Query: {
    async tours(parent: any, args: any, context: any) {
      return await getRepository(Tour).find({
        relations: ["schedules", "tags"],
      });
    },
    async tour(parent: any, args: any, context: any) {
      return await getRepository(Tour).findOne({
        relations: ["schedules", "tags"],
        where: `Tour.id = ${args.id}`
      });
    },
  },
  Tour: {
    async schedules(parent: any, args: any, context: any) {
      return ScheduleResolver.Query.schedules(parent, args, context)
    },
    async tags(parent: any, args: any, context: any) {
      return TagResolver.Query.tags(parent, args, context);
    }
  },
};
