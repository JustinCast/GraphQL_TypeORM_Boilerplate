import { getRepository } from "typeorm";
import { Tag } from "../entities/Tag";

export const TagResolver = {
  Query: {
    async tags(parent: any, args: any, context: any) {}

    // TODO: obtener un tag específico
  }
}