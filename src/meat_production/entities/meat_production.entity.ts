import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class MeatProduction {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  meat_yield: string;

  @Field()
  @Column()
  slaughter_date: Date;

  @Field()
  @Column()
  sharing_schedule: string;

  @Field()
  @Column()
  animal_id: number;
}
