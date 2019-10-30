import { getRepository } from "typeorm";
import { Schedule } from "../entities/Schedule";

export const ScheduleResolver = {
  Query: {
    async schedules(parent: any, args: any, context: any) {
      return await getRepository(Schedule).find({
        relations: ["tour"]
      });
    }

    // TODO: obtener un schedule específico
  }
}