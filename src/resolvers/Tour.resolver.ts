import { getRepository } from "typeorm";
import { Tour } from "../entities/Tour";

export const TourResolver = {
  Query: {
    async tours(parent: any, args: any, context: any) {},
    async tour(parent: any, args: any, context: any) {},
  },
  Tour: {
    async schedules(parent: any, args: any, context: any) {},
    async tags(parent: any, args: any, context: any) {},
  },
};
