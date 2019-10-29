import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Tour } from "./Tour";


@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  from_datetime!: String;

  @Column()
  to_datetime!: String;

  @ManyToOne(() => Tour, (tour: Tour) => tour.schedules)
  @JoinColumn({name: "id_tour"})
  tour!: Tour;
}