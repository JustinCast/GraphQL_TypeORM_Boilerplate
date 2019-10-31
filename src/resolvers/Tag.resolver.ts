import { getRepository } from "typeorm";
import { Tag } from "../entities/Tag";
import { Tour } from "../entities/Tour";

export const TagResolver = {
  Query: {
    async tags(parent: any, args: any, context: any) {
      return await getRepository(Tag).find({
        relations: ["tour"],
      });
    },
  },
  Mutation: {
    async saveTag(parent: any, args: any, context: any) {
      return await getRepository(Tour)
        .findOne({ where: `Tour.id = ${args.input.id_tour}` })
        .then((t: Tour | undefined) => {
          let tag: Tag = new Tag();
          tag.name = args.input.name;
          tag.tour = t;
          getRepository(Tag).save(tag);
          return tag;
        })
        .catch((err: any) => console.log(err));
    },
  },
};
