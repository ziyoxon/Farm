import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity({ name: "info" })
export class Info {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  height: string;

  @Field()
  @Column()
  weight:string

  @Field()
  @Column()
  color :string

  @Field()
  @Column()
  gender:string

  @Field()
  @Column()
  breed:string

}
