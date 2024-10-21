import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Feeding {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  animal_id: number;

  @Field()
  @Column()
  feeding_schedules: string;

  @Field()
  @Column()
  types_of_feed: string;

  @Field()
  @Column()
  dietary: string;

  @Field()
  @Column()
  worker_id: number;
}
