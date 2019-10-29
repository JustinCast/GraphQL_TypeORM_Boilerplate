import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Tour } from "./Tour";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => Tour, (tour: Tour) => tour.tags)
  @JoinColumn({ name: "id_tour" })
  tour!: Tour;
}
