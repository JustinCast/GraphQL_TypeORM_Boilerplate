import { getRepository } from "typeorm";
import { Tour } from "../entities/Tour";

export const TourResolver = {
  Query: {
    async tours(parent: any, args: any, context: any) {
      return await getRepository(Tour).find({
        relations: ["Schedule", "Tag"],
      });
    },
    async tour(parent: any, args: any, context: any) {
      return await getRepository(Tour).findOne({
        relations: ["Schedule", "Tag"],
        where: `Tour.id = ${args.id}`
      });
    },
  },
  Tour: {
    async schedules(parent: any, args: any, context: any) {},
    async tags(parent: any, args: any, context: any) {},
  },
};
