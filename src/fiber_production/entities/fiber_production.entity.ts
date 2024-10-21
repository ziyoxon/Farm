import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class FiberProduction {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  fiber_yield: string;

  @Field()
  @Column()
  shearing_schedule: string;

  @Field()
  @Column()
  fiber_quality: string;

  @Field()
  @Column()
  animal_id: number;
}
