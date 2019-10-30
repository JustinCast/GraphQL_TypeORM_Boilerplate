import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Schedule } from "./Schedule";
import { Tag } from "./Tag";

@Entity()
export class Tour {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  max_people!: number;

  @Column()
  cost!: number;
  
  @Column()
  all_included!: boolean;

  @Column()
  min_age!: number;

  @Column()
  ranking!: number;

  @OneToMany(() => Schedule, (schedule: Schedule) => schedule.tour)
  schedules!: Array<Schedule>;

  @OneToMany(() => Tag, (tag: Tag) => tag.tour)
  tags!: Array<Tag>;
}