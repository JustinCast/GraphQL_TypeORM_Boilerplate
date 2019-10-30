import { getRepository } from "typeorm";
import { Tag } from "../entities/Tag";

export const TagResolver = {
  Query: {
    async tags(parent: any, args: any, context: any) {
      return await getRepository(Tag).find({
        relations: ["tour"]
      });
    }
  }
}